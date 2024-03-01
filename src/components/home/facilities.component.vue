<template>
  <div class="home-facilities">
    <div class="s-container s-container--spacing px-0">
      <v-row
        no-gutters
        align="center"
      >
        <v-col
          v-for="item in facilities"
          :key="item.id"
          sm="6" lg="3"
          cols="12"
          class="px-4 mb-sm-10 mb-lg-0 home-facilities__item"
        >
        <h2 class="home-facilities__title mb-4 primary--text">{{ item.title }}</h2>
        <p class="mb-0 home-facilities__content">{{ item.content }}</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'HomeFacilitiesComponent',
})
export default class HomeFacilitiesComponent extends Vue {
  facilities = [
    {
      title: 'Fast Delivery',
      content: 'Delivery within 24 Hours in any Place',
    },
    {
      title: '24/7 Support',
      content: 'Get our support any time at any hour',
    },
    {
      title: 'Secure Shopping',
      content: 'Highly secured online payment method ',
    },
    {
      title: 'Moneyback',
      content: 'Guaranteed money back in 30 days',
    },
  ];
}
</script>
<style lang="scss">
.home-facilities {
  background: url("../../assets/images/bg-cover-3.png");

  &__title {
    font-size: 30px;
    line-height: 120%;
    text-transform: capitalize;
    font-weight: 500;
  }

  &__content {
    font-size: 18px;
    line-height: 120%;
    font-weight: 500;
    font-family: 'Quicksand';
  }

  &__item {
    position: relative;

    &::before {
      content: "";
      width: 75px;
      height: 100px;
      background: url("../../assets/icons/shape.svg") no-repeat;
      position: absolute;
      left: -10px;
      top: 0px;
      background-size: contain;
    }
  }

  @media (max-width: 959px) {
    display: none;
  }
}
</style>
