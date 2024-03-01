<template>
  <div class="home-new-arrival s-container s-container--spacing px-0 pt-0">
    <HeaderPageComponent :title="pageTitle" />
    <v-row
      no-gutters
    >
      <v-col
        v-for="item in products"
        :key="item.id"
        sm="6" lg="3"
        cols="12"
        class="px-4 mb-10"
      >
        <CardPostComponent :item="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';
import { Product } from '@/shared/models/product';
import { PRODUCT_DATA } from '@/shared/constants/data-product';
import { isScreenLarge, sliceArray } from '@/shared/utils/helper';


@Component({
  name: 'HomeNewArrivalComponent',
  components: {
    CardPostComponent: LazyLoadService.loadComponent('card-post.component'),
    HeaderPageComponent: LazyLoadService.loadComponent('header-page.component'),
  },
})
export default class HomeNewArrivalComponent extends Vue {
  pageTitle = 'New Arrival';
  products: Product[] = [];

  created() {
    // Call api
    const newData = PRODUCT_DATA.reverse().map((item: any) => new Product().deserialize(item));
    if (isScreenLarge()) {
      this.products = sliceArray(newData, 4);
      return;
    }
    this.products = sliceArray(newData, 8);
  }

  mounted() {
    //
  }
}
</script>
