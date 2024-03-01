<template>
  <div class="home-experience s-container px-0 pt-0" id="experience">
    <div class="page-highlight s-container--spacing px-lg-16 px-0">
      <HeaderPageHorizontalComponent
        title="Experience"
        subTitle="Creative Timeline"
        description="Fusce sollicitudin eros id ex maximus gravida non vitae ante. Cras ac mi a dolor suscipit rutrum ut vitae mi."
      />
      <div class="timeline px-4">
        <span class="timeline__line"></span>
        <div class="timeline__list">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            class="timeline__item mb-10"
            v-for="(item, index) in experiences"
            :key="item.id"
          >
            <div class="timeline__detail">
              <div class="timeline__text">
                <h3>{{ item.title }}</h3>
                <span>{{ item.sub_title }}</span>
                <p class="mb-0">{{ item.description }}</p>
              </div>
            </div>

            <div class="timeline__icon">
              <span>{{ index + 1 }}</span>
            </div>

            <div class="timeline__year">
              <span>{{ item.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';
import  AOS  from '@/assets/js/aos';

@Component({
  name: 'ExperienceComponent',
  components: {
    CardPostComponent: LazyLoadService.loadComponent('card-post.component'),
    HeaderPageHorizontalComponent: LazyLoadService.loadComponent('header-page-horizontal.component'),
  },
})
export default class ExperienceComponent extends Vue {
  pageTitle = 'Popular Products';
  experiences: any[] = [];
  data = [
    {
      id: 1,
      title: 'UI/UX Designer',
      sub_title: 'WORK AT ENVATO',
      description:'Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.',
      time: 'Aug 2021 - Feb 2022',
      image_url: require('@/assets/images/1.jpg'),
      icon_url: require('@/assets/images/be.svg'),
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      sub_title: 'WORK AT ENVATO',
      description:'Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.',
      time: 'Mar 2022 - May 2022',
      image_url: require('@/assets/images/2.jpg'),
      icon_url: require('@/assets/images/dribbble.svg'),
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      sub_title: 'WORK AT ENVATO',
      description:'Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.',
      time: 'Sep 2022 - Present',
      image_url: require('@/assets/images/3.jpg'),
      icon_url: require('@/assets/images/instagram.svg'),
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      sub_title: 'WORK AT ENVATO',
      description:'Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.',
      time: 'Sep 2022 - Present',
      image_url: require('@/assets/images/3.jpg'),
      icon_url: require('@/assets/images/instagram.svg'),
    },
  ];

  created() {
    this.experiences = this.data;
  }

  mounted() {
    AOS.init()
    document.addEventListener('scroll', function (event) {
      AOS.refresh();
    }, true /*Capture event*/);
  }
}
</script>
<style lang="scss">
@import './experience.component.scss';
</style>
