<template>
  <div class="home-featured s-container s-container--spacing px-0">
    <HeaderPageComponent :title="pageTitle" />
    <div class="grid-container">
      <div v-for="item in products"
        :key="item.id"
        class="grid-item mb-10 mb-lg-0"
      >
        <CardPostComponent :item="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Product } from '@/shared/models/product';
import LazyLoadService from '@/shared/utils/lazy-load.service';
import { PRODUCT_DATA } from '@/shared/constants/data-product';
import { isScreenLarge, sliceArray } from '@/shared/utils/helper';


@Component({
  name: 'HomeFeaturedComponent',
  components: {
    CardPostComponent: LazyLoadService.loadComponent('card-post.component'),
    HeaderPageComponent: LazyLoadService.loadComponent('header-page.component'),
  },
})
export default class HomeFeaturedComponent extends Vue {
  pageTitle = 'Featured Products';
  products: Product[] = [];

  created() {
    const newData = PRODUCT_DATA.map((item: any) => new Product().deserialize(item));
    if (isScreenLarge()) {
      this.products = sliceArray(newData, 4);
      return;
    }
    this.products = sliceArray(newData, 5);
  }

  mounted() {
    //
  }
}
</script>
<style lang="scss">
.home-featured {
  .grid {
    &-container {
      display: grid;
      grid-template-columns: 50% auto auto auto;
      gap: 16px;
      padding: 15px;
    }

    &-item {
      font-size: 30px;

      &:first-child {
        grid-area: 1 / 1 / span 2 / span 2;
      }
    }
  }

  @media only screen and (min-width: 1264px) {
    .grid {
      &-item {
        &:first-child {
          align-self: center;
          padding-right: 30px;

          .s-card-post__cover {
            height: 700px;
          }
        }

        &:not(:first-child) {
          .s-card-post {
            &__category {
              font-size: 15px;
            }

            &__fee {
              font-size: 20px;
            }

            &__actions-item {
              padding: 10px 0 !important;
            }

            .v-chip {
              font-size: 12px;
            }

            h2 {
              font-size: 18px;
            }
          }
        }

        .s-card-post__cover {
          height: 270px;
        }
      }
    }
  }

  @media only screen and (max-width: 1263px) {
    .grid {
      &-container {
        grid-template-columns: auto auto;
        gap: 16px 32px;
      }

      &-item {
        &:first-child {
          grid-area: 1;
        }

        .s-card-post__cover {
          height: 350px;
        }
      }
    }
  }

  @media (max-width: 959px) {
    display: none;
  }
}
</style>
