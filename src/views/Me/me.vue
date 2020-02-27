<template>
  <v-layout row wrap>
    <v-flex xs12 class="pa-0">
      <v-card id="me" flat class="text-xs-center mb-3">
        <v-card-text>
          <h4>{{ $t('me.head') }}</h4>
        </v-card-text>
        <v-card-text class="color-me-text">
          <h1 v-html="$t('me.title')"></h1>
        </v-card-text>
        <v-card-text>
          <p class="black--text">{{ $t('me.sub') }}</p>
        </v-card-text>
      </v-card>

      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat class="text-xs-left color-me">
            <v-layout row wrap>
              <v-flex xl4 offset-xl3 lg5 offset-lg2 md5 offset-md1 sm6 offset-sm1>
                <v-card class="transparent" id="me_" flat>
                  <v-card-text>
                    <h3 class="mt-0 white--text display-1">{{ $t('me.descr') }}</h3>
                  </v-card-text>
                  <v-card-text>
                    <p class="text-xs-left white--text mt-4">{{ $t('me.descr_sub') }}</p>
                  </v-card-text>
                  <v-card-text>
                    <h3 class="mt-0 white--text display-1">{{ $t('me.skills') }}</h3>
                    <div class="mt-3">
                      <v-flex class="py-1" xs12 v-for="text in plus" :key="text.text">
                        <span class="subheading">
                          <v-icon
                            style="line-height: 0.9"
                            size="20"
                            class="red--text text--accent-3 mr-1"
                          >fas fa-plus</v-icon>
                          {{text}}
                        </span>
                      </v-flex>
                    </div>
                  </v-card-text>
                </v-card>
                <div class="mx-2">
                  <h3 class="mt-0 white--text display-1">Github profile</h3>
                  <github-data class="ma-2" :data="userData" />
                </div>
              </v-flex>
            </v-layout>
            <banner title="See my latest works" route="job" text="My work" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import banner from "../../components/Cards/components/banner";
import githubData from "./components/github";
import axios from "axios";

export default {
  name: "job",
  components: {
    banner,
    githubData
  },
  data() {
    return {
      userData: [],
      plus: [
        "HTML | CSS | JS",
        "ES6",
        "Nodejs",
        "Typescript",
        "VueJs | Vuex",
        "Vuetifyjs",
        "Nuxtjs",
        "Git",
        "Github",
        "Gitlab",
        "NPM",
        "Google Cloud Platform",
        "Firebase",
        "Api integration (e.g Mapbox, google-maps, instagram)",
        "Progressive Web App (Pwa)",
        "Single page application (Spa)",
        "Wordpress",
        "..."
      ]
    };
  },
  computed: {
    allData() {
      return this.userData;
    }
  },
  methods: {
    async getGithubData() {
      let data = await axios
        .get("https://api.github.com/users/masterDoomXII")
        .then(res => {
          this.userData.push(res.data);
        })
        .catch(err => {
          // console.log(err);
        });
    }
  },
  mounted() {
    this.getGithubData();
  }
};
</script>

<style>
a {
  color: #000;
}
.color-me {
  background: #eecda3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right bottom,
    #081B33,
    #0c0c0d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right bottom,
    #081B33,
    #0c0c0d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.color-me-text {
  background: -webkit-linear-gradient(#00c9ff, #a770ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

