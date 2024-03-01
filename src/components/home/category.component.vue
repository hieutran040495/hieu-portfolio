<template>
  <div class="home-category s-container s-container--spacing px-0">
    <v-row
      no-gutters
    >
      <v-col
        v-for="item in categories"
        :key="item.id"
        xs="12" sm="4"
        cols="12"
        class="px-4 home-category__item"
      >
        <v-img
          :src="item.image_url"
          class="home-category__img"
        >
        </v-img>
        <div
          class="home-category__title d-flex align-center justify-center"
        >
          {{ item.title }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'HomeCategoryComponent',
})
export default class HomeCategoryComponent extends Vue {
  categories = [
    {
      id: 1,
      title: 'Body Oil',
      image_url: require('@/assets/images/products/product-1-4.jpg'),
    },
    {
      id: 2,
      title: 'Makeup',
      image_url: require('@/assets/images/products/product-1-5.jpg'),
    },
    {
      id: 3,
      title: 'Skincare',
      image_url: require('@/assets/images/products/product-1-6.jpg'),
    }
  ];
}
</script>
<style lang="scss">
.home-category {
  &__img {
    width: 100%;
    height: 400px;
    border-radius: 100% 100% 0 0;
  }

  &__title {
    height: 100px;
    width: 100px;
    background-color: #f7f0eb;
    border-radius: 50%;
    font-weight: 500;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
  }

  &__item {
    position: relative;

    &:last-child {
      .home-category__img {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 1264px) {
    &__img {
      height: 310px;
    }
  }

  @media (max-width: 959px) {
    &__title {
      right: 30px;
      font-size: 14px;
      height: 70px;
      width: 70px
    }
  }

  @media (max-width: 599px) {
    &__img {
      height: 350px;
      width: 55%;
      margin: auto;
      margin-bottom: 60px;
    }

    &__title {
      right: 26%;
    }
  }

  @media (max-width: 479px) {
    &__img {
      width: 80%;
    }

    &__title {
      right: 18%;
    }
  }
}
</style>
