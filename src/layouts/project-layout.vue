<template>
  <v-app id="project-app">
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';

@Component({
  name: 'ProjectLayout',
  components: {
    'HeaderComponent': LazyLoadService.loadComponent('header.component'),
    'FooterComponent': LazyLoadService.loadComponent('footer.component'),
  },
})
export default class ProjectLayout extends Vue {

  mounted() {
    //
  }
}
</script>
<style lang="scss">
//
</style>
