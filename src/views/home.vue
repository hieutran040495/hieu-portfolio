<template>
  <v-container fluid class="pa-0">
    <BannerComponent />
    <AboutComponent />
    <SkillsComponent />
    <ProjectsComponent />
    <ExperienceComponent />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';

@Component({
  name: 'HomePage',
  components: {
    BannerComponent: LazyLoadService.loadComponent('banner/banner.component'),
    AboutComponent: LazyLoadService.loadComponent('about/about.component'),
    SkillsComponent: LazyLoadService.loadComponent('skills/skills.component'),
    ProjectsComponent: LazyLoadService.loadComponent('projects/projects.component'),
    ExperienceComponent: LazyLoadService.loadComponent('experience/experience.component'),
    HomeBlogComponent: LazyLoadService.loadComponent('home/blog.component'),
  },
})
export default class HomePage extends Vue {
  mounted() {
    //
  }
}
</script>
