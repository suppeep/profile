<template>
  <v-layout row wrap>
    <v-flex xs12 class="pa-0">
      <v-card id="jobs" flat class="text-center mb-3">
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
          <v-card flat class="text-left jobs-color">
            <v-layout row wrap>
              <v-flex xl4 offset-xl3 lg5 offset-lg2 md5 offset-md1 sm6 offset-sm1>
                <v-card class="transparent" id="job_" flat>
                  <v-card-text>
                    <h3 class="mt-0 display-1">{{ $t('job.descr') }}</h3>
                  </v-card-text>
                  <v-card-text>
                    <p class="text-left white--text mt-4">
                      {{ $t('job.descr_sub') }}
                      <a class="my_own--text" v-html="$t('job.link')"></a>.
                      <br>
                      {{ $t('job.meeting') }}
                    </p>
                  </v-card-text>
                </v-card>
                <github-repo :data="repoData"/>
              </v-flex>
            </v-layout>
            <banner style="margin-bottom: 40px" title="Read details about me" route="me" text="Me"/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import banner from "@/components/Cards/components/banner";
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
        .get("https://api.github.com/users/suppeep/repos")
        .then(response => {
          this.repoData = response.data;
        })
        .catch(error => {
          // console.log(error);
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
  color: #FFCE6D;
}
.jobs-color {
  background: #4568dc; /* fallback for old browsers */
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
.jobs-color-text {
  background: -webkit-linear-gradient(#b06ab3, #4568dc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>