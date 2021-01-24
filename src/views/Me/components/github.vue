<template>
  <v-flex xs12>
    <v-card v-for="item in data" :key="item.name" class="pb-5" light flat>
      <v-list multi-line>
        <template>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="item.avatar_url">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <github-button :href="item.html_url">Follow me</github-button>
            </v-list-item-action>
          </v-list-item>
          <v-textarea class="mx-3 my-3" v-html="item.bio" readonly filled label="Bio"></v-textarea>
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

