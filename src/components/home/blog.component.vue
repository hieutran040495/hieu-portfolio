<template>
  <div class="home-blog s-container s-container--spacing px-0">
    <HeaderPageComponent :title="pageTitle" />
    <v-row
      no-gutters
    >
      <v-col
        v-for="item in blogs"
        :key="item.id"
        sm="6" lg="4"
        cols="12"
        class="px-4 mb-10 home-blog__item"
      >
        <CardBlogComponent :item="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';
import { Blog } from '@/shared/models/blog';
import { BLOG_DATA } from '@/shared/constants/data-blog';
import { sliceArray } from '@/shared/utils/helper';


@Component({
  name: 'HomeBlogComponent',
  components: {
    CardBlogComponent: LazyLoadService.loadComponent('card-blog.component'),
    HeaderPageComponent: LazyLoadService.loadComponent('header-page.component'),
  },
})
export default class HomeBlogComponent extends Vue {
  pageTitle = 'Latest & Greatest';
  blogs: Blog[] = [];

  created() {
    const newData = BLOG_DATA.map((item: any) => new Blog().deserialize(item));
    this.blogs = sliceArray(newData, 3);
  }
}
</script>
<style lang="scss">
.home-blog {
  @media (max-width: 1263px) {
    &__item {
      &:last-child {
        display: none;
      }
    }
  }
}
</style>
