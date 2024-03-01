<template>
  <v-app id="app">
    <DefaultLayout v-if="this.$route.meta.isDefaultLayout" />
    <ProjectLayout v-else />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';

@Component({
  name: 'App',
  components: {
    'HeaderComponent': LazyLoadService.loadComponent('header.component'),
    'FooterComponent': LazyLoadService.loadComponent('footer.component'),
    'DefaultLayout': LazyLoadService.loadLayout('default-layout'),
    'ProjectLayout': LazyLoadService.loadLayout('project-layout'),
  },
})
export default class App extends Vue {
  mounted() {
    //
  }
}
</script>
<style lang="scss">
  #scroll-top {
    position: absolute;
    bottom: 25px;
    right: -10px;
    transition: all 0.3s ease;

    .text {
      text-decoration: none;
      color: #000;
      font-size: 13px;
      transform: rotate(90deg);
      text-transform: uppercase;
      transform-origin: left;
      white-space: nowrap;
      position: absolute;
      bottom: 150px;
      left: 0;
      font-weight: 500;
    }

    .line {
      &-container {
        background-color: rgba(0,0,0,.08);
        bottom: 0;
        height: 100px;
        left: 0;
        position: absolute;
        transition: all .3s ease;
        transform: rotate(180deg);
        width: 1px;
      }

      &-bar {
        background-color: rgba(0,0,0,.4);
        bottom: 0;
        height: 0%;
        left: 0;
        position: absolute;
        width: 1px;
      }
    }
  }

  .v-list-item {
    padding: 0;

    a {
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: var(--black) !important;
      padding: 0 16px;
    }
  }
</style>
