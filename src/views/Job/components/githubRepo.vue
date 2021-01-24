<template>
  <v-flex xs12>
    <v-card v-for="item in data" :key="item.id" class="pb-5 ma-2" light flat>
      <v-list multi-line>
        <template>
          <v-list-item avatar>
            <v-list-item-avatar>
              <img :src="item.owner.avatar_url">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{item.full_name}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <github-button
                :href="item.html_url"
                data-icon="octicon-star"
                aria-label="Star ntkme/github-buttons on GitHub"
              >Star</github-button>
            </v-list-item-action>
          </v-list-item>
          <v-textarea class="mx-3 my-3" v-html="item.description" readonly filled label="Bio"></v-textarea>
          <!-- <div class="mx-3">
            Demo:
            <a :href="item.homepage" target="_blank">{{ item.homepage }}</a>
          </div> -->
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
