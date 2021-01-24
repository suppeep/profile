<template>
  <v-card class="mt-5 text-center" flat>
    <v-layout row>
      <v-flex xs12 md6 offset-md>
        <v-card class="transparent mt-2" light flat>
          <v-card-text class="title">{{ title }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md5>
        <v-card class="transparent" light flat>
          <v-card-text class>
            <router-link :to="{ name: route }">
              <v-btn
                text
                rounded
                class="pink accent-3 subheading text-capitalize white--text shadow_y"
                >{{ text }}</v-btn
              >
            </router-link>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "banner",
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
