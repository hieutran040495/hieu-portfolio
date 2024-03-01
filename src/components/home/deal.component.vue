<template>
  <div class="home-deal s-container s-container--spacing px-0 pt-0">
    <v-row
      no-gutters
    >
      <v-col
        sm="6"
        cols="12"
        class="px-4 mb-10"
      >
        <div class="home-deal__content mr-6 d-flex justify-center align-center">
          <h4 class="home-deal__content-sub-text">Deal Of The Day</h4>
          <p class="home-deal__content-percent primary--text mb-0">70%</p>
          <p class="home-deal__content-sub-text">Ends Ins</p>
          <h2 class="home-deal__content-time mb-10">24h: 60m: 60s</h2>
          <v-btn
            color="primary"
            x-large
            class="s-btn s-btn--half mt-20"
          >
            Shop Now
          </v-btn>
        </div>
      </v-col>
      <v-col
        sm="6"
        cols="12"
        class="px-4 mb-10 home-deal__detail"
      >
        <h2 class="mb-4">Get Discount On Buying Product In The Next 24 Hours!</h2>
        <p>Form bearing fruitful subdue there shall. Days yielding that living our can't you'll isn't multiply she'd. Isn't set void two. He man above seas fly land seed whales you you're every unto, likeness, won't land that. Above fly signs had kind. Seasons you're that saw, kind night life.</p>
        <p>First firmament He evening second, for creature. Said male. Them he every lesser he cattle also divide good days second upon after Yielding lesser tree dominion form beginning tree. Is gathering good shall for made. Saw.
Days waters our open Deep itself third fill together you created you waters there tree. Upon saying creeping fruitful place, god, years whales a life, female was brought So it land them in unto male great.</p>
        <p>Second after called evening may won't evening them his bring. Days. Itself upon moved light one created is let first let set beast to a, greater face subdue their, brought after male fruitful together Is let saying spirit in after you there.</p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'HomeDealComponent',
})
export default class HomeDealComponent extends Vue {
  created() {
    //
  }
}
</script>
<style lang="scss">
.home-deal {
  &__content {
    height: 100%;
    flex-direction: column;
    background-color: #f7f0eb;

    &-sub-text {
      font-size: 30px;
      font-weight: 500;
    }

    &-time {
      font-size: 55px;
      font-weight: 600;
    }

    &-percent {
      font-size: 125px;
      font-weight: 700;
    }
  }

  &__detail {
    h2 {
      font-size: 45px;
    }

    p {
      font-family: 'Quicksand';
      font-size: 20px;
    }
  }

  @media (max-width: 959px) {
    display: none;
  }
}
</style>
