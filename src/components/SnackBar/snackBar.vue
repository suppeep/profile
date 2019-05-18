<template>
  <v-snackbar
    :color="snackColor"
    v-model="snackWithButtons"
    :timeout="timeout"
    bottom
    right
    class="snack"
  >
    {{ snackWithBtnText }}
    <v-spacer/>
    <v-btn flat :color="color" @click.native="refresh" class="dashed">{{ snackBtnText }}</v-btn>
    <v-btn icon @click="closeSnackBar">
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "snack-bar",
  props: {
    snackWithButtons: {
      type: Boolean
    },
    closeSnackBar: Function,
    timeout: Number,
    refresh: Function,
    snackWithBtnText: String,
    snackBtnText: String,
    snackColor: String,
    color: String
  }
};
</script>

<style>
.dashed {
  background-image: linear-gradient(to right, #f8faff 75%, transparent 75%);
  background-position: 0 1.68em;
  background-size: 200px 2px;
}
</style>