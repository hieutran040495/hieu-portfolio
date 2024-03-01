<template>
  <v-card
    class="s-card-post s-card-blog"
    outlined
    tile
  >
    <div>
      <v-img
        class="s-card-blog__img"
        :src="item.image_url"
      ></v-img>
    </div>

    <v-card-text class="black--text s-card-blog__ctn">
      <h2 class="s-card-blog__title">{{ item.name }}</h2>
      <p class="s-card-blog__date text-truncate mt-4 primary--text">{{ item.createdAtString }}</p>
      <p class="s-card-blog__describe mb-0">{{ item.describe }}</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Blog } from '@/shared/models/blog';

@Component({
  name: 'CardPostComponent',
})
export default class CardPostComponent extends Vue {
  @Prop() item: Blog;
  @Prop() height: Number;
}
</script>
<style lang="scss">
.s-card-blog {
  position: relative;

  &__title {
    font-weight: 600;
    font-size: 25px;
    line-height: 140%;
  }

  &__date {
    font-family: 'Quicksand';
    font-size: 14px;
    font-weight: bold;
  }

  &__describe {
    font-family: 'Quicksand';
    font-size: 18px;
    line-height: 160%;
    font-weight: 500;
  }

  &__ctn {
    background: #f7f0eb;
    padding: 40px;
    position: absolute;
    left: 15px;
    bottom: 15px;
    width: calc(100% - 30px);
  }

  &__img {
    height: 680px;
  }

  @media (max-width: 959px) {
    &__title {
      font-size: 18px;
    }

    &__date {
      font-size: 14px;
    }

    &__describe {
      font-size: 14px;
    }

    &__ctn {
      padding: 25px;
      position: unset;
      width: 100%;
    }

    &__img {
      height: 300px;
    }
  }
}
</style>
