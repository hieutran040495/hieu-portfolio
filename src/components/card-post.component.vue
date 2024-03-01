<template>
  <v-card
    class="s-card-post"
    outlined
    tile
  >
    <router-link :to="{ name: item.route_name }" target="_blank">
      <div class="s-card-post__cover">
        <img
          class="s-card-post__img s-img--cover"
          alt="product"
          :src="item.image_url"
        />
      </div>

      <v-card-text class="black--text s-card-post__text">
        <h2 class="primary--text s-card-post__title">{{ item.title }}</h2>
        <p class="s-card-post__des mb-0">{{ item.description }}</p>
        <img class="hover" src="@/assets/images/vector5.svg" alt="">
      </v-card-text>
    </router-link>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Product } from '@/shared/models/product';
import { PRODUCT_ACTION } from '@/shared/constants/product';

@Component({
  name: 'CardPostComponent',
})
export default class CardPostComponent extends Vue {
  @Prop() item: Product;
  @Prop() height: Number;
  actions = PRODUCT_ACTION;

  get heightImg() {
    return this.height || 350;
  }
}
</script>
<style lang="scss">
.s-card-post {
  cursor: pointer;

  &:hover {
    .s-card-post__title {
      &::after {
        width: 40px;
      }
    }

    .hover {
      opacity: 1;
    }
  }

  &__img {
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &__cover {
    height: 350px;
    position: relative;

    &:hover {
      .s-card-post__actions {
        opacity: 1;
      }
    }
  }

  &__text {
    background-color: #f8f5ef;
    box-shadow: 0 14px 20px hsla(39,9%,71%,.3);
    padding: 20px 30px 28px 50px;
    border-bottom-left-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
  }

  &__title {
    text-transform: uppercase;
    position: relative;
    font-size: 16px;
    font-weight: 700 !important;

    &::before {
      position: absolute;
      content: "";
      width: 40px;
      height: 2px;
      background-color: rgba(0,0,0,.1);
      left: -50px;
      bottom: 10px;
    }

    &::after {
      position: absolute;
      content: "";
      width: 0;
      height: 2px;
      background-color: var(--extra-color);
      left: -50px;
      bottom: 10px;
      z-index: 1;
      transition: all .3s ease;
    }
  }

  &__des {
    opacity: 0.5;
    margin-top: 5px;
    height: 42px;
  }

  a {
    text-decoration: none;
  }

  .hover {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    opacity: .1;
    transition: all .3s ease;
  }
}
</style>
