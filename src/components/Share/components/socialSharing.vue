<template>
  <div>
    <social-sharing
      class="white social-card"
      url="https://lukas-kreutzer.web.app/"
      title="It's me Lukas Kreutzer."
      description="Intuitive, Fast and Composable landingpage."
      quote="lukas-kreutzer profile page"
      hashtags="#lukas-kreutzer #pwa #vueJs #developer"
      twitter-user="lukas-kreutzer"
      inline-template
    >
      <div class="transparent">
        <v-speed-dial v-model="fab" class="fab-btn">
          <template v-slot:activator>
            <v-btn v-model="fab" class="pink" dark fab>
              <v-icon v-if="fab">mdi-close</v-icon>
              <v-icon v-else>mdi-share-variant</v-icon>
            </v-btn>
          </template>
          <v-btn fab dark small class="facebook-color">
            <network network="facebook">
              <v-icon class="fab fa-facebook-f"></v-icon>
            </network>
          </v-btn>
          <v-btn fab dark small color="line-color">
            <network network="line">
              <v-icon class="fab fa-line" aria-hidden="true"></v-icon>
            </network>
          </v-btn>
          <v-btn fab dark small color="reddit-color">
            <network network="reddit">
              <v-icon class="fab fa-reddit" aria-hidden="true"></v-icon>
            </network>
          </v-btn>
          <v-btn fab dark small color="twitter-color">
            <network network="twitter">
              <v-icon class="fab fa-twitter" aria-hidden="true"></v-icon>
            </network>
          </v-btn>
          <v-btn fab small dark color="whatsapp-color">
            <network network="whatsapp">
              <v-icon class="fab fa-whatsapp" aria-hidden="true"></v-icon>
            </network>
          </v-btn>
          <v-btn fab dark small color="grey darken-2">
            <network network="email">
              <v-icon class="fas fa-envelope" aria-hidden="true"></v-icon>
            </network>
          </v-btn>
        </v-speed-dial>
      </div>
    </social-sharing>
  </div>
</template>

<script>
export default {
  data: () => ({
    fab: false,
  }),
};
</script>

<style>
.facebook-color {
  background: #365397 !important;
}
.twitter-color {
  background: rgb(0, 168, 240) !important;
}
.whatsapp-color {
  background: rgb(37, 211, 102) !important;
}
.reddit-color {
  background: rgb(255, 69, 0) !important;
}
.line-color {
  background: rgb(0, 195, 0) !important;
}

.social-card {
  position: fixed;
  bottom: 0;
  z-index: 9999;
}

.fab-btn {
  position: fixed;
  left: 7px;
  bottom: 7px;
  z-index: 99991;
}
</style>
