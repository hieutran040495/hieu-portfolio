<template>
  <div class="home-popular s-container s-container--spacing px-0 pt-0">
    <HeaderPageComponent :title="pageTitle" />
    <v-row
      no-gutters
      class=""
    >
      <v-col
        v-for="item in products"
        :key="item.id"
        sm="6" lg="3"
        cols="12"
        class="px-4 mb-10 mb-lg-0"
      >
        <CardPostComponent :item="item" />
      </v-col>
    </v-row>
    <p class="my-button my-font">Button</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';
import { Product } from '@/shared/models/product';
import { PRODUCT_DATA } from '@/shared/constants/data-product';
import { sliceArray } from '@/shared/utils/helper';

@Component({
  name: 'HomePopularComponent',
  components: {
    CardPostComponent: LazyLoadService.loadComponent('card-post.component'),
    HeaderPageComponent: LazyLoadService.loadComponent('header-page.component'),
  },
})
export default class HomePopularComponent extends Vue {
  pageTitle = 'Popular Products';
  products: Product[] = [];

  created() {
    const newProducts = PRODUCT_DATA.map((item: any) => new Product().deserialize(item));
    this.products = sliceArray(newProducts, 4);
  }
}
</script>
<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

.my-font {
  font-family: $body-font-family;
}
</style>
