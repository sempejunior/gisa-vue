/*
  This rule checks if the user's email and mfa was verified
*/

module.exports = async function(user, context, callback) {
    function redirectIfEmailNotVerified(data, userEmail) {
        const base64 = require('Base64');

        const errorParams = `errorType=${data.errorType}&email=${encodeURIComponent(userEmail)}`;
        const encodedErrorParams = base64.btoa(errorParams);

        const returnTo = `${configuration.AUTHENTICATION_ERROR_PAGE}?error=${encodedErrorParams}`;

        let url = returnTo;
        if (data.logout) {
            url = `${configuration.LOGOUT_URL}?returnTo=${returnTo}`;
        }

        return { url };
    }

    function requireMfa(data) {
        const isRequired = data.mfaRequired;

        if (isRequired) {
            return {
                provider: 'any',
                allowRememberBrowser: true,
            };
        }
    }

    function isMfaCompleted(authentication) {
        let authMethods = [];
        if (authentication && Array.isArray(authentication.methods)) {
            authMethods = authentication.methods;
        }

        const completedMfa = !!authMethods.find((method) => method.name === 'mfa');

        return completedMfa;
    }

    console.log('Executing the rule "postLoginValidation"');

    // Skipping when Refreshing Token or Silent Auth process
    if (context.protocol === 'oauth2-refresh-token' || context.request.query.prompt === 'none') {
        console.log('"validateUserConnection" - Execution skipped');
        return callback(null, user, context);
    }

    var axios = require('axios@0.21.1');

    const url = `${configuration.PLATFORM_ACCESS_MANAGER_API_URL}v1/post-login/validate`;

    try {
        const body = {
            user: {
                id: user.user_id,
                name: user.name,
                username: user.username,
                email: user.email,
                emailVerified: user.email_verified,
                lastPasswordReset: user.last_password_reset,
                createdAt:  user.created_at,
                updatedAt: user.updated_at,
            },
            context: {
                connection: context.connection,
                isSocial: context.connection === context.connectionStrategy,
                loginsCount: context.stats.loginsCount,
                mfa: {
                    hasEnrolledFactors: (user.multifactor || []).length,
                    completed: isMfaCompleted(context.authentication),
                },
                request: {
                    userAgent: context.request.userAgent,
                    ip: context.request.ip,
                    hostname: context.request.hostname,
                    query: context.request.query,
                    body: context.request.body,
                },
                geoip: {
                    countryCode: context.request.geoip.country_code,
                    countryCode3: context.request.geoip.country_code3,
                    country: context.request.geoip.country_name,
                    city: context.request.geoip.city_name,
                    latitude: context.request.geoip.latitude,
                    longitude: context.request.geoip.longitude,
                    timeZone: context.request.geoip.time_zone,
                    continentCode:  context.request.geoip.continent_code,
                },
            },
        };

        // if post receives 200, continue to next rule
        await axios.post(url, body);
    } catch (error) {
        console.log(`User email or mfa could not be verified`, error);
        const { data } = error.response.data;

        if(error.response.status ===  401) {
            context.redirect = redirectIfEmailNotVerified(data, user.email);
        }

        if(error.response.status === 403) {
            context.multifactor = requireMfa(data);
        }
    }

    return callback(null, user, context);
}
