<template>
  <div class="home-projects s-container s-container--spacing px-0" id="project">
    <HeaderPageComponent :title="pageTitle" />
    <v-row
      no-gutters
    >
      <v-col
        v-for="(item, index) in products"
        data-aos="fade-up"
        :key="item.id"
        :data-aos-delay="aosDelayTime(index)"
        :data-aos-duration="1000"
        sm="6" lg="4"
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
import { aosDelay } from '@/shared/utils/helper';


@Component({
  name: 'ProjectsComponent',
  components: {
    CardPostComponent: LazyLoadService.loadComponent('card-post.component'),
    HeaderPageComponent: LazyLoadService.loadComponent('header-page.component'),
  },
})
export default class ProjectsComponent extends Vue {
  pageTitle = 'New Arrival';
  products: Product[] = [];
  data = [
    // {
    //   id: 1,
    //   category: 'Youtube',
    //   title: 'Drawing Art',
    //   image_url: require('@/assets/images/1.jpg'),
    //   route_name: 'TodoPage',
    // },
    // {
    //   id: 2,
    //   category: 'Vimeo',
    //   title: 'Lafayette Fly',
    //   image_url: require('@/assets/images/2.jpg'),
    //   route_name: 'TodoPage',
    // },
    // {
    //   id: 3,
    //   category: 'Vimeo',
    //   title: 'Lafayette Fly',
    //   image_url: require('@/assets/images/3.jpg'),
    //   route_name: 'TodoPage',
    // },
    {
      id: 6,
      title: 'Todo List',
      description: 'Create a "to-do list" to organize and prioritize your tasks',
      image_url: require('@/assets/images/6.jpg'),
      route_name: 'TodoPage',
    },
    {
      id: 4,
      title: 'Job Listings with Filtering',
      description: 'Job Listing with Filtering that lists available jobs that can be filtered ',
      image_url: require('@/assets/images/4.jpg'),
      route_name: 'JobListingPage',
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'A weather application is a digital tool that provides users with real-time weather information and forecast.',
      image_url: require('@/assets/images/5.jpg'),
      route_name: 'WeatherPage',
    },
  ];

  aosDelayTime(index: number) {
    const arr = aosDelay(this.products.length);
    return arr[index];
  }

  created() {
    this.products = this.data.map((item: any) => new Product().deserialize(item));
  }
}
</script>
