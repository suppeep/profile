<template>
  <v-card :style="cardStyle" style="z-index: 2" flat class="pa-3 main-card">
    <v-flex xs12>
      <v-card-text class="pa-0">
        <icon-anima :animate="animated" color="#F05654">
          <v-icon size="32" slot="icon" :style="iconStyle">{{ icon }}</v-icon>
        </icon-anima>
      </v-card-text>
    </v-flex>
    <v-card-text>
      <h5 v-if="needed" class="mt-4 pa-0 mb-0">
        <b :style="textColor">{{ title }}</b>
      </h5>
      <h5 v-else>
        <b style="color: #30323d; font-size: 22px; font-weight: 400;">
          {{ mtext }}
          <mark :style="iconStyle" class="transparent">{{ hText }}</mark>
        </b>
      </h5>
    </v-card-text>
    <v-card-text class="pa-0">
      <p>{{ text }}</p>
    </v-card-text>
  </v-card>
</template>


<script>
import iconAnima from "../components/components/iconAnimation";
export default {
  name: "main-card",
  components: {
    iconAnima
  },
  props: {
    cardStyle: {
      type: Object,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: true
    },
    iconStyle: {
      type: Object,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    needed: {
      type: Boolean,
      required: true
    },
    mtext: {
      type: String,
      required: false
    },
    iconColor: {
      type: null,
      required: false
    },
    hText: {
      type: String,
      required: false
    },
    textColor: {
      type: Object,
      required: false
    },
    textSize: {
      type: String,
      required: false
    },
    animated: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.main-card {
  min-height: 230px;
}
.VueStar {
  position: relative !important;
}
.VueStar__ground {
  width: 100% !important;
  height: 0 !important;
  position: relative;
}
.VueStar__decoration {
  top: 6px !important;
  left: 50% !important;
}
</style>
