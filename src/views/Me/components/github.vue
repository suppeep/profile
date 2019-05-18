<template>
  <v-flex xs12>
    <v-card v-for="item in data" :key="item.name" class="pb-5" light flat>
      <v-list multi-line>
        <template>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="item.avatar_url">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{item.name}}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <github-button :href="item.html_url">Follow me</github-button>
            </v-list-tile-action>
          </v-list-tile>
          <v-textarea class="mx-3 my-3" v-html="item.bio" readonly box label="Bio"></v-textarea>
        </template>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import GithubButton from "vue-github-button";
import { StringDecoder } from "string_decoder";

export default {
  name: "github-data",
  components: {
    GithubButton
  },
  props: {
    data: {
      type: Array
    }
  }
};
</script>

