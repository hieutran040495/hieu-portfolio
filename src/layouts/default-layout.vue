<template>
  <v-app id="app">
    <v-card>
      <HeaderComponent @toggle="toggle" :drawer="drawer" />

      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto ctn-wrp"
      >
        <div class="s-wrapper">
          <router-view />
        </div>
        <div>

        </div>
        <FooterComponent />
      </v-sheet>
      <div id="scroll-top">
        <a href="#" @click="scrollTotop">
          <span class="text">TO TOP</span>
        </a>
        <div class="line-container">
          <span class="line-bar"></span>
        </div>
      </div>
    </v-card>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      :right="true"

    >
      <v-list dense>
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          link
        >
          <a :href="item.id" >
            {{ item.title }}
          </a>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';
import { MENU } from '@/shared/constants/common';

@Component({
  name: 'DefaultLayout',
  components: {
    'HeaderComponent': LazyLoadService.loadComponent('header.component'),
    'FooterComponent': LazyLoadService.loadComponent('footer.component'),
  },
})
export default class DefaultLayout extends Vue {
  drawer = null;
  menu = MENU;
  progress: number = 0;

  mounted() {
    window.addEventListener('scroll', function(event) {
      setTimeout(() => {
        const el: any = document.querySelector('#scrolling-techniques-7');
        const headerEl: any = document.querySelector('.header');
        const lineBarEl: any = document.querySelector('.line-bar');
        const scollTopEl: any = document.querySelector('#scroll-top');
        const height = el.scrollHeight - el.clientHeight;
        const scrolled = (el.scrollTop / height) * 100;
        lineBarEl.style.height = scrolled + '%';
        if (el.scrollTop > 64) {
          headerEl.classList.add('header-animate');
          scollTopEl.style.right = '25px';
        } else {
          scollTopEl.style.right = '-10px';
        }

      }, 0);
    }, true);
  }

  toggle(e: any) {
    this.drawer = e;
  }

  scrollTotop() {
    const el: any = document.querySelector('#scrolling-techniques-7');
    el.scrollTop = 0;
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
