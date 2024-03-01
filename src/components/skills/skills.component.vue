<template>
  <div class="home-skills s-container px-0 pt-0" id="skill">
    <div class="page-highlight s-container--spacing px-lg-16 px-0">
      <HeaderPageHorizontalComponent
        title="Our Services"
        subTitle="What Can I Do"
        description="Fusce sollicitudin eros id ex maximus gravida non vitae ante. Cras ac mi a dolor suscipit rutrum ut vitae mi."
      />

      <v-row
        no-gutters
        class="home-skills__list"
      >
        <v-col
          v-for="(item, index) in products"
          sm="6" lg="3"
          cols="12"
          class="px-4 mb-10 mb-lg-0 home-skills__item"
          data-aos="fade-up"
          :key="item.id"
          :data-aos-delay="aosDelayTime(index)"
          :data-aos-duration="1000"
        >
          <img :src="item.image_url" alt="">

          <div class="home-skills__item-title mb-8">
            <h3>UI/UX Designer</h3>
            <span>Work At Envato</span>
          </div>

          <p class="home-skills__text mb-0">
            Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.
          </p>
        </v-col>
      </v-row>
      <div class="shape">
        <img src="@/assets/images/vector4.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';
import { Product } from '@/shared/models/product';
import { sliceArray, aosDelay } from '@/shared/utils/helper';

@Component({
  name: 'SkillsComponent',
  components: {
    CardPostComponent: LazyLoadService.loadComponent('card-post.component'),
    HeaderPageHorizontalComponent: LazyLoadService.loadComponent('header-page-horizontal.component'),
  },
})
export default class SkillsComponent extends Vue {
  pageTitle = 'Popular Products';
  products: Product[] = [];
  data = [
    {
      id: 1,
      name: 'UI/UX Designer',
      description: 'WORK AT ENVATO',
      content:'Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.',
      image_url: require('@/assets/images/layer.svg'),
    },
    {
      id: 2,
      name: 'Graphic Design',
      description: 'WORK AT FREEPIC',
      content:'Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.',
      image_url: require('@/assets/images/design.svg'),
    },
    {
      id: 3,
      name: 'Digital Marketing',
      description: 'WORK AT FIVERR',
      content:'Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.',
      image_url: require('@/assets/images/marketing.svg'),
    },
    {
      id: 4,
      name: 'Mobile Application',
      description: 'WORK AT APPLE',
      content:'Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.',
      image_url: require('@/assets/images/apps.svg'),
    },
  ];
  time = 1000;

  aosDuration(index: number) {
    return 500 * index;
  }

  aosDelayTime(index: number) {
    const arr = aosDelay(this.products.length);
    return arr[index];
  }

  created() {
    const newProducts = this.data.map((item: any) => new Product().deserialize(item));
    this.products = sliceArray(newProducts, 4);
  }
}
</script>
<style lang="scss">
@import './skills.component.scss';
</style>
