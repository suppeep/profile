<template>
  <v-layout row wrap>
    <v-flex xs12 class="pa-0">
      <v-card id="passion" flat class="text-xs-center mb-3">
        <v-card-text>
          <h4>{{ $t('passion.head') }}</h4>
        </v-card-text>
        <v-card-text class="color-passion-text">
          <h1 v-html="$t('passion.title')"></h1>
        </v-card-text>
        <v-card-text>
          <p class="black--text">{{ $t('passion.sub') }}</p>
        </v-card-text>
      </v-card>

      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark flat class="text-xs-left passion_c color-passion">
            <v-layout row wrap>
              <v-flex xl4 offset-xl3 lg5 offset-lg2 md5 offset-md1 sm6 offset-sm1>
                <v-card
                  style="background: transparent !important;"
                  class="passion_c"
                  id="passion_"
                  flat
                >
                  <v-card-text>
                    <h3 class="mt-0 display-1">{{ $t('passion.descr') }}</h3>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
            <!-- timeline -->
            <template>
              <v-flex class="pa-1" xs12 md4 offset-md4>
                <h3 style="font-size: 29px" class="white--text">My Timeplan</h3>
                <v-timeline>
                  <v-timeline-item
                    v-for="(year, i) in $t('passion.years')"
                    :key="i"
                    :color="year.color"
                    small
                  >
                    <template v-slot:opposite>
                      <span
                        :class="`headline font-weight-bold ${year.color}--text`"
                        v-text="year.year"
                      ></span>
                    </template>
                    <div class="py-3">
                      <h2
                        :style="{ color: year.color }"
                        :class="`headline text-xs-left font-weight-light mb-3`"
                      >{{ year.title }}</h2>
                      <div>{{ year.text }}</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-flex>
            </template>
            <banner style="background: #fff" title="See my latest works" route="job" text="My work" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import banner from "@/components/Cards/components/banner";
export default {
  name: "passion",
  components: {
    banner
  },
  data() {
    return {};
  }
};
</script>

<style>
.color-passion {
  background: #ffefba !important; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right bottom,
    #081B33,
    #0c0c0d
  ) !important; /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right bottom,
    #081B33,
    #0c0c0d
  ) !important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.color-passion-text {
  background: -webkit-linear-gradient(#ffefba, #ffe387);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>