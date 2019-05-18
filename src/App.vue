<template>
  <v-app>
    <nav-header v-model="openTab"/>
    <l-snack-bar
      :color="txtColor"
      :snackColor="snackColor"
      :closeSnackBar="closeSnackBar"
      :snackWithButtons="snackWithButtons"
      :timeout="timeout"
      :refresh="refreshApp"
      :snackWithBtnText="snackWithBtnText"
      :snackBtnText="snackBtnText"
    />
    <v-content>
      <router-view v-transition @after-leave="afterLeave"/>
    </v-content>
    <app-footer/>
    <social-sharing></social-sharing>
  </v-app>
</template>

<script>
import navHeader from "./components/header/components/header";
import appFooter from "./components/Footer/components/footer";
import socialSharing from "./components/Share/components/socialSharing";
import lSnackBar from "./components/SnackBar/snackBar";

export default {
  name: "App",
  components: {
    navHeader,
    appFooter,
    socialSharing,
    lSnackBar
  },
  data() {
    return {
      openTab: false,
      refreshing: false,
      registration: null,
      snackBtnText: "",
      snackWithBtnText: "",
      snackWithButtons: false,
      timeout: 0,
      txtColor: "#f8faff",
      snackColor: "#a1ffce"
    };
  },
  created() {
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload();
      console.log("file is running");
    });
  },
  methods: {
    afterLeave() {
      this.$root.$emit("triggerScroll");
    },
    closeSnackBar() {
      this.snackWithButtons = false;
    },
    showRefreshUI(e) {
      // Display a snackbar inviting the user to refresh/reload the app
      this.registration = e.detail;
      this.snackBtnText = "Refresh";
      this.snackWithBtnText = "New version available!";
      this.snackWithButtons = true;
    },
    refreshApp() {
      this.snackWithButtons = false;
      // Protect against missing registration.waiting.
      if (!this.registration || !this.registration.waiting) {
        return;
      }
      this.registration.waiting.postMessage("skipWaiting");
    }
  }
};
</script>

<style scoped>
/* Provide better right-edge spacing when using an icon button there. */
.snack >>> .v-snack__content {
  padding-right: 16px;
}
.snack {
  z-index: 999999;
}
</style>
