<template>
  <v-layout row wrap>
    <v-flex xs12 class="pa-0">
      <transition name="fade-transition">
        <div v-if="3200 !== show" class="swipe-menu subheading shadow_mx hidden-sm-and-down">
          <mark>
            Click
            <code>esc</code> key to open menu
          </mark>
        </div>
      </transition>
      <v-card id="home" flat class="text-center white p_t p_b">
        <v-card-text>
          <h1 class="img-view-title" v-html="$t('home.title')"></h1>
        </v-card-text>
        <v-card-text>
          <p class="sub-header">{{ $t('home.sub') }}</p>
        </v-card-text>
        <v-card-text>
          <router-link :to="{ name: 'me' }">
            <v-btn outlined class="my_own--text">{{ $t('home.action.me') }}</v-btn>
          </router-link>
        </v-card-text>
      </v-card>
    </v-flex>

    <!-- who I am -->
    <v-flex xs12>
      <v-card id="whoiam_" flat class="text-xs-center pt-3 my_own">
        <v-card-text>
          <h2 class="mb-5 white--text">{{ $t('home.whoIAm') }}</h2>
        </v-card-text>
        <v-container fluid grid-list-xl>
          <v-layout row justify-center wrap>
            <v-flex v-for="data in mCard1" :key="data.title" xl2 lg3 md4 sm4 xs10>
              <main-card
                v-animate="'slide-up'"
                class="py-4 ma-2 scale-middle"
                :mtext="data.title"
                :hText="data.hText"
                :iconStyle="data.iconColor"
                :icon="data.icon"
                :text="data.text"
                :needed="data.needed"
                :cardStyle="data.cardStyle"
                :animated="data.cardStyle.animated"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <down-btn class="scroll-down" :target="firstId"/>
    </v-flex>

    <!-- what i already learned -->
    <v-flex xs12>
      <v-card id="learned_" flat class="text-xs-center pt-5 p_b">
        <v-card-text>
          <h2 class="mb-1 mt-5">{{ $t('home.learned') }}</h2>
        </v-card-text>
        <v-card-text class="text-center">
          <p class="header-under mb-5 mt-0">{{ $t('home.learned_sub') }}</p>
        </v-card-text>
        <v-layout row wrap>
          <v-flex
            v-for="i in mCard2"
            :key="i.titel"
            lg3
            offset-lg2
            md5
            offset-md1
            sm6
            offset-sm3
            xs12
          >
            <v-container fluid>
              <main-card
                v-animate="'fade'"
                class="pt-5"
                :cardStyle="i.cardStyle"
                :title="i.title"
                :iconStyle="i.iconStyle"
                :textColor="i.textColor"
                :icon="i.icon"
                :text="i.text"
                :needed="i.needed"
                :animated="i.cardStyle.animated"
              />
            </v-container>
          </v-flex>
        </v-layout>
      </v-card>
      <down-btn :target="secondId"/>
    </v-flex>

    <!-- more stuff I like -->
    <v-flex xs12>
      <v-card
        style="padding-bottom: 200px; padding-top: 130px"
        id="more_"
        flat
        class="text-xs-center"
      >
        <v-card-text>
          <h2 class="mb-1">{{ $t('home.more') }}</h2>
        </v-card-text>
        <v-card-text class="text-center">
          <p class="header-under mb-5">{{ $t('home.more_sub') }}</p>
        </v-card-text>

        <v-container fluid grid-list-xl>
          <v-layout row justify-center wrap>
            <v-flex class="ma-2" v-for="i in mCard3" :key="i.title" xl3 lg2 md3 sm4 xs10>
              <main-card
                v-animate="'fade'"
                class="pt-5 li"
                :title="i.title"
                :iconStyle="i.iconStyle"
                :textColor="i.textColor"
                :icon="i.icon"
                :text="i.text"
                :needed="true"
                :animated="i.cardStyle.animated"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <!-- <down-btn class="scroll-down-x" :target="fourthId"/> -->
    </v-flex>
  </v-layout>
</template>

<script>
import downBtn from "../../../components/Buttons/components/down";
import mainCard from "../../../components/Cards/components/card";
import data from "../../../Data/data";
import { setTimeout } from "timers";
export default {
  components: {
    downBtn,
    mainCard
  },
  data() {
    return {
      mCard1: data.cards_1,
      mCard2: data.cards_2,
      mCard3: data.cards_3,
      firstId: "#learned_",
      secondId: "#more_",
      show: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = 3200;
    }, 3200);
  }
};
</script>

<style>
/* TEST MODE */
.animate {
  transition-delay: 0.1s;
  transition-duration: 0.25s;
  transition-timing-function: ease-in;
  transform: translateY(150px);
}

.slide-up.animate-active {
  transform: translateY(0);
}

.fade {
  transition-delay: 0.1s;
  transition-duration: 0.35s;
  transition-timing-function: ease-in;
}
.fade.animate-active {
  opacity: 1;
  transform: translateY(0);
}
.swipe-menu {
  position: absolute;
  z-index: 99999;
  padding: 15px;
  background: #f6c180;
  left: 50%;
  border-radius: 4px;
  margin-right: -50%;
  transform: translate(-50%, -85%);
}
.swipe-menu mark {
  background: #f6c180;
  color: #fff;
}
</style>