<template>
  <v-layout row wrap>
    <v-flex class="pa-0">
      <v-card id="news" flat class="text-xs-center mb-3">
        <v-card-text>
          <h4>{{ $t('news.head') }}</h4>
        </v-card-text>
        <v-card-text class="teal--text text--accent-1">
          <h1 v-html="$t('news.title')"></h1>
        </v-card-text>
        <v-card-text>
          <p>{{ $t('news.sub') }}</p>
        </v-card-text>
      </v-card>

      <v-layout row wrap>
        <v-flex xs12>
          <v-card
            flat
            height="auto"
            style="margin-top: -15px; padding-top: 400px"
            class="teal accent-1 text-xs-center"
          >Comming soon</v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "news",
  data: () => {
    return {};
  }
};
</script>