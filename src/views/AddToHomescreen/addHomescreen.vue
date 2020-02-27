<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card id="addTo" flat class="text-xs-center mb-3">
        <v-card-text>
          <h4>{{ $t('addTo.head') }}</h4>
        </v-card-text>
        <v-card-text class="add-to-color-text">
          <h1 v-html="$t('addTo.title')"></h1>
        </v-card-text>
        <v-card-text>
          <p class="black--text">{{ $t('addTo.sub') }}</p>
        </v-card-text>
      </v-card>

      <v-layout row wrap>
        <v-flex xs12>
          <v-card style="padding-top: 150px" class="add-to-color" flat>
            <v-layout align-center justify-center row fill-height>
              <v-flex xl12 offset-xl3 lg5 offset-lg2 md5 offset-md1 sm6 offset-sm1>
                <v-card-text>
                  <p v-html="$t('addTo.card1.title')" class="text-xs-left"></p>
                </v-card-text>
                <v-card-text>
                  <div class="subheading">
                    {{ $t('addTo.card1.step._1') }}
                    <br>
                    <li v-html="$t('addTo.card1.step._2')"></li>
                    {{ $t('addTo.card1.step._3') }}
                    <br>
                    {{ $t('addTo.card1.step._4') }}
                    <br>
                    {{ $t('addTo.card1.step._5') }}
                    <br>
                    {{ $t('addTo.card1.step._6') }}
                  </div>
                </v-card-text>
              </v-flex>
              <v-flex v-if="onMobile" xs12 md1></v-flex>
            </v-layout>
            <v-layout align-center justify-center row fill-height>
              <v-flex xl12 offset-xl3 lg5 offset-lg2 md5 offset-md1 sm6 offset-sm1>
                <v-card-text class="mt-5">
                  <p class="text-xs-left">
                    How to Bookmark to Home Screen at
                    <mark>iOS:</mark>
                  </p>
                </v-card-text>
                <v-card-text>
                  <div class="subheading">
                    {{ $t('addTo.card1.step._1') }}
                    <br>
                    <li v-html="$t('addTo.card1.step._2')"></li>
                    {{ $t('addTo.card2.step._3') }}
                    <br>
                    {{ $t('addTo.card2.step._4') }}
                    <br>
                    {{ $t('addTo.card2.step._5') }}
                    <br>
                    {{ $t('addTo.card2.step._6') }}
                  </div>
                </v-card-text>
              </v-flex>
              <v-flex v-if="onMobile" xs12 md1></v-flex>
            </v-layout>
            <v-layout class="p_b" align-center justify-center row fill-height>
              <v-flex xl12 offset-xl3 lg5 offset-lg2 md5 offset-md1 sm6 offset-sm1>
                <v-card-text class="mt-5">
                  <p class="text-xs-left">
                    How to Bookmark to Home Screen at
                    <mark>Firefox:</mark>
                  </p>
                </v-card-text>
                <v-card-text>
                  <div class="subheading">
                    {{ $t('addTo.card1.step._1') }}
                    <br>
                    <li v-html="$t('addTo.card1.step._2')"></li>
                    {{ $t('addTo.card3.step._3') }}
                    <br>
                    {{ $t('addTo.card3.step._4') }}
                    <br>
                    {{ $t('addTo.card3.step._5') }}
                  </div>
                </v-card-text>
              </v-flex>
              <v-flex v-if="onMobile" xs12 md1></v-flex>
            </v-layout>
            <banner title="See my latest works" route="job" text="My work"/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import banner from "@/components/Cards/components/banner";
export default {
  name: "add-to",
  components: {
    banner
  },
  data() {
    return {
      onMobile: false
    };
  },
  computed: {
    mobile() {
      if (window.innerWidth > 800) {
        console.log("1");
        return (this.onMobile = true);
      } else {
        console.log("2");
        return (this.onMobile = false);
      }
    },
    mounted() {
      this.mobile;
    }
  }
};
</script>


<style>
a {
  color: #ffe082;
}
mark {
  background: none;
  color: #ffe082;
}
ul,
li {
  text-decoration: none;
  list-style-type: none;
}

.add-to-color {
  background: #e1eec3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right bottom,
   #081B33,
    #0c0c0d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right bottom,
    #081B33,
    #0c0c0d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.add-to-color-text {
  background: -webkit-linear-gradient(#fc5c7d, #f6c180);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
