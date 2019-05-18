<template>
  <div id="scroll" @click="$vuetify.goTo(target, options)">
    <span class="arrow-bounce">
      <v-icon class="primary--text">keyboard_arrow_down</v-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: "down-button",
  props: {
    target: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      offset: -150
    }
  },
  computed: {
    options() {
      return {
        offset: this.offset
      };
    }
  }
};
</script>

<style>
.down-btn {
  z-index: 9999;
}
</style>

