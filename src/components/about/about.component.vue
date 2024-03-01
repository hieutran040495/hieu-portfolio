<template>
  <div class="home-about s-container s-container--spacing px-0" id="about">
    <v-row
      no-gutters
      class="py-lg-10 py-0"
    >
      <v-col
        lg="6"
        cols="12"
        class="px-4 mb-10 mb-lg-0"
      >
        <div class="home-about__item home-about__left d-flex align-end">
          <div class="year">
            <h3>7</h3>
            <span class="year-rounded">
              <img src="@/assets/images/flower.png" alt="">
            </span>
          </div>

          <div class="experience">
            <h3>+</h3>
            <p>years experience</p>
            <span class="shape">
              <img src="@/assets/images/dots.png" alt="">
            </span>
            <span class="shape-circle">
              <img src="@/assets/images/icon1.svg" alt="">
            </span>
          </div>
        </div>
      </v-col>

      <v-col
        lg="6"
        cols="12"
        class="px-4"
      >
        <div class="home-about__item home-about__right">
          <div class="home-about__title">
            <span>Have A Nice Day!</span>
            <h3>I'm Looking For UX/UI Designer.</h3>
          </div>

          <p class="home-about__text mb-0">
            With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
          </p>

          <div class="home-about__progress mt-8">
            <v-row>
              <v-col
                lg="4"
                cols="12"
                class="px-4"
              >
                <div class="home-about__progress-bar"></div>
                <div class="home-about__progress-percent">
                  <img src="@/assets/images/photoshop.svg" alt="">
                  <span class="home-about__progress-number">90%</span>
                </div>
              </v-col>
              <v-col
                lg="4"
                cols="12"
                class="px-4"
              >
                <div class="home-about__progress-bar"></div>
                <div class="home-about__progress-percent">
                  <img src="@/assets/images/xd.svg" alt="">
                  <span class="home-about__progress-number">80%</span>
                </div>
              </v-col>
              <v-col
                lg="4"
                cols="12"
                class="px-4"
              >
                <div class="home-about__progress-bar"></div>
                <div class="home-about__progress-percent">
                  <img src="@/assets/images/figma.svg" alt="">
                  <span class="home-about__progress-number">70%</span>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'AboutComponent',
})
export default class AboutComponent extends Vue {}
</script>
<style lang="scss">
@import './about.component.scss';
</style>
