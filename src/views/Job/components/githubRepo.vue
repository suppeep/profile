<template>
  <v-flex xs12>
    <v-card v-for="item in data" :key="item.id" class="pb-5" light flat>
      <v-list multi-line>
        <template>
          <v-list-tile avatar>
            <v-list-tile-avatar v-if="show">
              <img :src="item.owner.avatar_url">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{item.full_name}}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <!-- Place this tag where you want the button to render. -->
              <!-- Place this tag where you want the button to render. -->
              <github-button
                :href="item.url"
                data-icon="octicon-star"
                aria-label="Star ntkme/github-buttons on GitHub"
              >Star</github-button>
            </v-list-tile-action>
          </v-list-tile>
          <v-textarea
            v-if="show"
            class="mx-3 my-3"
            v-html="item.description"
            readonly
            box
            label="Bio"
          ></v-textarea>
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

