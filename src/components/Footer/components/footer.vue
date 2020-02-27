<template>
  <v-footer dark height="auto">
    <v-card width="100%" flat tile class="my_own white--text text-xs-center">
      <v-card-text>
        <v-btn
          :href="icon.link"
          target="_blank"
          v-for="icon in icons"
          :key="icon.link"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-flex xs12>
        <v-card-text
          class="white--text pt-0 subheading font-weight-light"
        >I like to providing the speziality for the planet Earth. Our recources are limited and I like to share my opertunity I have to you. It's more love and peace in one place. Connect with me and share the happiness.</v-card-text>
      </v-flex>
      <v-divider></v-divider>

      <v-card-text class="white--text subheading">
        &copy;Lukas Kreutzer |
        <a
          href="https://www.freeprivacypolicy.com/privacy/view/6923c3f1e35306b1b30018fd398f2d0f"
          class="black--text"
          title="Privacy Policy "
        >Privacy Policy</a>
      </v-card-text>
      <span>Made with ❤️ in Germany</span>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      // { icon: "fab fa-facebook", link: "https://facebook.com" },
      // { icon: "fab fa-twitter", link: "https://twitter.com" },
      // { icon: "fab fa-instagram", link: "https://instagram.com" },
      { icon: "fab fa-github", link: "https://github.com/suppeep/" }
    ]
  })
};
</script>