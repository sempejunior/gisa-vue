<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>GISA</v-toolbar-title>
        <v-spacer></v-spacer>
      </div>

      <v-spacer></v-spacer>
      <div v-if="!$auth.loading">
        <v-btn
          v-if="!$auth.isAuthenticated"
          @click="login"
          target="_blank"
          text
        >
          <span class="mr-2">Login</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
        <div v-if="$auth.isAuthenticated">
          <a @click="directToUrl('/profile')">
            <v-avatar color="red">
              <img :src="$auth.user.picture" :alt="$auth.user.given_name" />
            </v-avatar>
          </a>

          <v-btn @click="logout" text>
            <span class="mr-2">Logout</span>
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="directToUrl('/')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="directToUrl('/profile')">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods: {
    // Log the user in
    login() {
      try {
        this.$auth.loginWithRedirect();
      } catch (error) {
        console.log(error);
        alert("Você precisa validar seu email!");
      }
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
      alert("Você foi deslogado!");
    },
    directToUrl(url) {
     this.$router.push(url);
    },
  },
};
</script>
