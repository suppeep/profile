<template>
  <v-flex xs12>
    <v-card v-for="item in data" :key="item.id" class="pb-5" light flat>
      <v-list multi-line>
        <template>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="item.owner.avatar_url">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{item.full_name}}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <github-button
                :href="item.html_url"
                data-icon="octicon-star"
                aria-label="Star ntkme/github-buttons on GitHub"
              >Star</github-button>
            </v-list-tile-action>
          </v-list-tile>
          <v-textarea class="mx-3 my-3" v-html="item.description" readonly box label="Bio"></v-textarea>
          <div class="mx-3">
            Demo:
            <a :href="item.homepage" target="_blank">{{ item.homepage }}</a>
          </div>
        </template>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import GithubButton from "vue-github-button";
export default {
  name: "github-data",
  components: {
    GithubButton
  },
  props: {
    data: {
      type: null
    }
  }
};
</script>
