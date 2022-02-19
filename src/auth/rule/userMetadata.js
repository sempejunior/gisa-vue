// /*
//   This rule add attributes to SDK "getUser" method payload
// */

module.exports = async function(user, context, callback) {
    console.log('Executing the rule "addPersistenceAttribute"');
  
    user.user_metadata = user.user_metadata || {};
    user.app_metadata = user.app_metadata || {};
  
    user.user_metadata.lang = user.user_metadata.lang || 'en';
  
    context.idToken['https:user_metadata'] = { ...user.user_metadata };
    delete context.idToken['https:user_metadata'].lastUpdate;
  
    context.idToken['https:app_metadata'] = { ...user.app_metadata};
  
    try {
      console.log(`Updating the user metadata [${JSON.stringify(user.user_metadata)}] to user_id [${user.user_id}]`);
      await auth0.users.updateUserMetadata(user.user_id, user.user_metadata);
      console.log(`User metadata [${JSON.stringify(user.user_metadata)}] to user_id [${user.user_id}] updated`);
  
      callback(null, user, context);
    } catch (error) {
      console.log(`An error occurred while updating the data [${JSON.stringify(user.user_metadata)}] to user_id [${user.user_id}]:`, error);
      callback(error);
    }
  }

/*
  var user_metadata = {
                    role : role,
                   	nome: nome,
                  	areaAtuacao: areaAtuacao,
                    cpf: cpf,
                    telefone: telefone
                 };
*/