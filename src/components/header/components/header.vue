<template>
  <div>
    <v-navigation-drawer id="drawye" v-model="drawer" fixed clipped class="my_own" app>
      <v-list dark class="my_own">
        <template v-for="(item, i) in l_items.items">
          <router-link :to="{ name: item.name, params: { locale: 'en' } }" :key="item.link">
            <v-list-tile :key="i">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="white--text">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </template>
        <v-layout row>
          <v-flex xs3>
            <v-icon right class="my-2">fas fa-globe-americas</v-icon>
          </v-flex>
          <v-flex xs9>
            <select v-model="$i18n.locale">
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
            </select>
          </v-flex>
        </v-layout>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      v-touch:swipe.right="swipe"
      scroll-off-screen
      class="shadow_l"
      color="white"
      app
      fixed
      clipped-left
    >
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12>
          <router-link :to="{ name: 'home', params: { locale: 'en' } }">
            <div class="logo-masterdoom my_own--text">MasterDoomXII</div>
            <v-img class="logo_h" src="../../../../public/img/icons/icon-512x512.png" alt/>
          </router-link>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          :to="{ name: i.name, params: { locale: 'en' } }"
          id="btn-toolbar-item"
          :ripple="false"
          class="text-capitalize font-weight-regular"
          v-for="i in l_items.itemsNav"
          :key="i.text"
          flat
        >{{ i.text }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: ["en", "de"],
      drawer: false
    };
  },
  computed: {
    l_items() {
      return {
        items: [
          { icon: "fas fa-home", title: this.$t("header.home"), name: "home" },
          { icon: "fas fa-user-tag", title: this.$t("header.me"), name: "me" },
          {
            icon: "fas fa-briefcase",
            title: this.$t("header.job"),
            name: "job"
          },
          {
            icon: "fas fa-heart",
            title: this.$t("header.passion"),
            name: "passion"
          },
          {
            icon: "fas fa-newspaper",
            title: this.$t("header.news"),
            name: "news"
          },
          {
            icon: "far fa-id-badge",
            title: this.$t("header.addTo"),
            name: "addTo"
          }
        ],
        itemsNav: [
          { text: this.$t("header.me"), name: "me" },
          { text: this.$t("header.job"), name: "job" },
          { text: this.$t("header.passion"), name: "passion" },
          { text: this.$t("header.addTo"), name: "addTo" }
        ]
      };
    }
  },
  methods: {
    open() {
      this.drawer = !this.drawer;
    },
    swipe() {
      this.open();
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e && e.keyCode == 27) {
        this.drawer = !this.drawer;
      }
    });
  }
};
</script>

<style lang="stylus">
#keep {
  .v-navigation-drawer__border {
    display: none;
  }
}

.logo-masterdoom {
  position: absolute;
  right: -223.3px;
  top: 11.9px;
  font-size: 23px;
}

.v-btn--active:before, .v-btn:focus:before, .v-btn:hover:before {
  background: transparent;
}

#btn-toolbar-item .v-btn__content {
  color: #212121;
}

#btn-toolbar-item .v-btn__content:hover {
  color: #000;
}

#btn-toolbar-item .v-btn__content:focus {
  color: #a770ef;
}

.logo_h {
  width: 55px;
  height: auto;
  left: 0px;
}

/* Select style */
select {
  margin: 0 auto;
  color: #fff;
  width: 100%;
  height: 39.11px;
  cursor: pointer;
  background: transparent;
}

select option {
  background-color: white;
  color: gray;
  width: 310px;
  padding: 10px 15px;
  height: 20px;
  cursor: pointer;
}
</style>