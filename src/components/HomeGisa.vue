<template>
  <v-content style="padding: 10px">
    <section>
      <v-parallax src="../assets/heartbeat-163709.jpg" height="500">
        <v-layout column align-center justify-center class="white--text">
          <h1
            class="white--text mb-2 display-1 text-xs-center"
            style="font-weight: 1200; text-shadow: 5px 3px #000000"
          >
             GISA
          </h1>
          <div
            class="white--text subheading mb-3 text-xs-center"
            style="font-weight: 900; text-shadow: 2px 2px #000000"
          >
            Gestão  Integral  da  Saúde  do  Associado 
          </div>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2"
                      >Boa Saúde</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Sua saúde sempre boa!</div>
                  </v-card-title>
                  <v-card-text>
                    Uma  empresa  de  grande  porte,  com  mais  de  um  milhão  de  associados  ativos,  nos  diversos 
municípios  onde  atua.  A  operadora  possui  mais  de  10.000  (dez  mil)  colaboradores  cadastrados,  entre 
médicos, enfermeiros, fisioterapeutas, dentistas e outros profissinais da área de saúde.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2"
                      >Um sistema</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Focado em Integração</div>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2"
                      >GISA</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      Gestão  Integral  da  Saúde  do  Associado
                    </div>
                  </v-card-title>
                  <v-card-text>
                    Gestão  Integral  da  Saúde  do  Associado  (GISA),  é  uma 
proposta  arquitetural  completa  e  totalmente  integrada,  que  está  sendo  construída  pela  equipe  técnica  da 
PUC Minas Virtual  Escopo de Sistema 4 
Boa  Saúde.  GISA  é  uma  solução  constituída  de  quatro  módulos  funcionais,  que  deve  incorporar  e/ou 
integrar os recursos existentes nos sistemas SAF, SGPS e SAS
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>



    <section>
      <v-parallax :src="imageLink.social_cover" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">
            We are dropping cool news and opportunities on socials
          </div>
        </v-layout>
        <v-layout justify-space-around justify-center>
          <v-icon x-large dark>fab fa-facebook-f</v-icon>

          <v-icon x-large dark>fab fa-twitter</v-icon>

          <v-icon x-large dark>fab fa-reddit-alien</v-icon>

          <v-icon x-large dark>fab fa-instagram</v-icon>

          <v-icon x-large dark>fab fa-discord</v-icon>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                We are not a company. We hate companies. Just imagine us like
                the guys from the Silicon Valley series.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">We are hiring</div>
              </v-card-title>
              <v-card-text>
                Are you a creative person? Do you like techy stuff? Complete the
                email form by writing your skills and interests
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>


   
  </v-content>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      title: "Endorfine",
      imageLink: {
        main: "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",
        sub_main:
          "../assets/pulse-trace-163708.jpg",
        logo: "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",
        social_cover:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4",
      },
      email: "",
      emailRules: [
        (v) => {
          return !!v || "E-mail is required";
        },
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      subscribed: false,
    };
  },
  methods: {
    subscribe: function () {
      this.subscribed = !this.subscribed;
    },
  },

  computed: {
    imgHeight: function () {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    },
  },

};
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
