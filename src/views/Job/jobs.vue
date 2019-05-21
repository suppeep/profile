<template>
  <v-layout row wrap>
    <v-flex xs12 class="pa-0">
      <v-card id="jobs" flat class="text-xs-center mb-3">
        <v-card-text>
          <h4>{{ $t('job.head') }}</h4>
        </v-card-text>
        <v-card-text class="jobs-color-text">
          <h1 v-html="$t('job.title')"></h1>
        </v-card-text>
        <v-card-text>
          <p class="black--text">{{ $t('job.sub') }}</p>
        </v-card-text>
      </v-card>

      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat class="text-xs-left jobs-color">
            <v-layout row wrap>
              <v-flex xl4 offset-xl3 lg5 offset-lg2 md5 offset-md1 sm6 offset-sm1>
                <v-card class="transparent" id="job_" flat>
                  <v-card-text>
                    <h3 class="mt-0 display-1">{{ $t('job.descr') }}</h3>
                  </v-card-text>
                  <v-card-text>
                    <p class="text-xs-left white--text mt-4">
                      {{ $t('job.descr_sub') }}
                      <a style="color: #286d6a" v-html="$t('job.link')"></a>.
                      <br>
                      {{ $t('job.meeting') }}
                    </p>
                  </v-card-text>
                </v-card>
                <github-repo :data="repoData"/>
              </v-flex>
            </v-layout>
            <banner title="Read my latest news" route="news" text="News Feed"/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import banner from "../../components/Cards/components/banner";
import githubRepo from "./components/githubRepo";
import axios from "axios";
export default {
  name: "job",
  components: {
    banner,
    githubRepo
  },
  data() {
    return {
      repoData: []
    };
  },
  methods: {
    async getGithubRepo() {
      let data = await axios
        .get("https://api.github.com/users/masterDoomXII/repos")
        .then(response => {
          this.repoData = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getGithubRepo();
  }
};
</script>

<style>
a {
  color: #212121;
}
.jobs-color {
  background: #4568dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right bottom,
    #b06ab3,
    #4568dc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right bottom,
    #b06ab3,
    #4568dc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.jobs-color-text {
  background: -webkit-linear-gradient(#b06ab3, #4568dc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>