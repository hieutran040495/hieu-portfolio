<template>
  <div class="home-banner">
    <div class="home-banner__cover">
      <v-img
        src="@/assets/images/products/product-1-3.jpg"
        aspect-ratio="2"
        height="100%"
      >
      </v-img>
    </div>
    <div class="home-banner__slide">
      <v-img
        src="@/assets/icons/shape.svg"
        class="home-banner__slide-shape"
      >
      </v-img>
      <v-carousel
        :continuous="false"
        :cycle="cycle"
        :show-arrows="false"
        :vertical="true"
        vertical-delimiters="vertical"
        hide-delimiter-background
        height="100%"
      >
        <v-carousel-item
          v-for="item in slides"
          :key="item.id"
        >
          <v-sheet
            class="home-banner__carousel"
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
            >
              <div class="home-banner__carousel-item">
                <h4 class="home-banner__carousel-subtitle">{{ item.sub_title }}</h4>
                <h2 class="home-banner__carousel-title"> {{ item.newTitle }}
                  <span class="text-highlight">
                    {{ item.endTitle }}
                    <span class="text-highlight--underline"></span>
                  </span>
                </h2>
                <p class="home-banner__carousel-ctn s-text-black--light">{{ item.description }}</p>

                <v-btn color="primary" x-large class="s-btn s-btn--half mt-20">
                  Explore
                </v-btn>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Banner } from '@/shared/models/banner';

@Component({
  name: 'HomeBannerComponent',
})
export default class HomeBannerComponent extends Vue {
  colors = [
    '#ffe4d5',
    'yellow darken-4',
    'red lighten-2',
  ];

  cycle = false;
  resData = [
    {
      id: 1,
      title: 'Beauty Product That Really Works',
      sub_title: 'Forever Beautiful',
      description: 'Since when has the concept of “beauty” existed? When it comes to beauty, people often think of personal accessories that make a difference to help the wearer stand out.'
    },
    {
      id: 2,
      title: 'Trending Offers',
      sub_title: 'Discount',
      description: 'SkinCeuticals Daily Brightening UV Defense Sunscreen SPF30 1 fl. oz'
    }
  ];
  slides: Banner[] = [];

  created() {
    //
  }

  mounted() {
    this.slides = this.resData.map((item) => new Banner().deserialize(item));
  }

}
</script>
<style lang="scss">
.home-banner {
  position: relative;

  &__cover {
    width: 50%;
    height: 765px;
  }

  &__slide {
    height: 593px;
    position: absolute;
    width: 60%;
    right: 0;
    top: 86px;

    &-shape {
      width: 103px;
      position: absolute;
      top: -64px;
      left: -51px;
      z-index: 2;
    }

    .v-carousel {
      // height: auto !important;

      &__controls {
        right: 20px !important;

        &__item {
          margin: 8px 20px;
        }
      }
    }

    .row {
      margin: 0;
    }

    .v-btn.v-btn--icon {
      color: #c28566;
    }
  }

  &__carousel {
    background: url("../../assets/images/bg-banner.png") no-repeat;
    background-size: cover;
    background-position: right top;

    &-item {
      width: 65%;
      margin: 30px 10%;
    }

    &-subtitle {
      line-height: 27px;
      text-transform: lowercase;
      letter-spacing: 0.3em;
      color: #C28566;
      margin-bottom: 20px;
      font-family: "Quicksand";
      font-weight: 700;
    }

    &-title {
      line-height: 130%;
      text-transform: capitalize;
      font-weight: 600;
    }

    &-ctn {
      line-height: 160%;
      margin-top: 30px;
      margin-bottom: 40px !important;
      font-family: 'Quicksand';
      font-weight: 400;
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .text-highlight {
    color: #C28566;
    position: relative;

    &--underline {
      background: url("../../assets/images/underline.png") no-repeat;
      background-size: contain;
      width: 100%;
      display: block;
      height: 14px;
      position: absolute;
      right: 0;
    }
  }

  @media (min-width: 960px) {
    &__carousel {
      &-subtitle {
        font-size: 23px; // 23px - 1300w
      }

      &-title {
        font-size: 65px; // 65px - 1600w
      }

      &-ctn {
        font-size: 18px; // 18px - 1300w
      }
    }
  }

  @media (max-width: 959px) {
    &__cover {
      display: none;
    }

    &__slide {
      height: 325px;
      position: unset;
      width: 100%;

      &-shape {
        display: none;
      }

      .v-carousel__controls {
        right: 16px !important;
      }
    }

    &__carousel {
      background: unset;

      &-subtitle {
        display: none;
      }

      &-title {
        font-size: 30px;
      }

      &-ctn {
        font-size: 15px;
      }

      &-item {
        margin: 30px 16px;
      }
    }
  }
}
</style>
