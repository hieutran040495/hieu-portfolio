<template>
  <div class="home-banner" id="home">
    <div class="home-banner__wrp"></div>
    <div class="s-container">
      <div class="home-banner__ctn">
        <h3 class="home-banner__name">
          <span>I</span>
          AM <br />
          Alex.
        </h3>

        <span class="home-banner__welcome">Welcome to my Agency</span>
      </div>
    </div>
    <span class="shape shape-1">
      <img src="@/assets/images/icon5.svg" class="animate-circle" alt="">
    </span>
    <span class="shape shape-2">
      <img src="@/assets/images/icon7.svg" alt="">
    </span>
    <span class="shape shape-3">
      <img src="@/assets/images/icon3.svg" alt="">
    </span>
    <span class="shape shape-4">
      <img src="@/assets/images/icon6.svg" class="animate-circle" alt="">
    </span>
    <span class="shape shape-5">
      <img src="@/assets/images/icon1.svg" alt="">
    </span>
    <span class="shape shape-6">
      <img src="@/assets/images/icon5.svg" class="animate-circle" alt="">
    </span>
    <span class="shape shape-7">
      <img src="@/assets/images/icon2.svg" alt="">
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'BannerComponent',
})
export default class BannerComponent extends Vue {}
</script>
<style lang="scss">
@import './banner.component.scss';
</style>
