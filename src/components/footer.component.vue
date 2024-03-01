<template>
  <v-footer
    padless
    id="contact"
  >
    <v-card
      flat
      tile
      class="footer lighten-1 w-100"
    >
      <div class="s-container">
        <h3
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          I want to hear from <br/>you please
          <a href="" class="contact_link">contact me!</a>
        </h3>
        <div
          class="d-flex align-end contact"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          <span class="contact-item email">infomaya.tonni@gmail.com</span>
          <div class="contact-item text-lg-center">
            <img class="icon" src="@/assets/images/vector3.svg" alt="">
          </div>
          <div class="contact-item socials">
            <div class="socials-list">
              <span class="socials-item">
                <img src="@/assets/images/facebook-stroke.svg" alt="">
              </span>
              <span class="socials-item">
                <img src="@/assets/images/linkedin-stroke.svg" alt="">
              </span>
              <span class="socials-item">
                <img src="@/assets/images/instagram-stroke.svg" alt="">
              </span>
            </div>
            <p class="mb-0 text-lg-center">© {{ new Date().getFullYear() }} — All rights reserved.</p>
          </div>
        </div>
      </div>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'FooterComponent',
})
export default class FooterComponent extends Vue {
  get isMobile() {
    return this.$vuetify.breakpoint.width < 960
  }
}
</script>
<style lang="scss">
.theme--light.v-sheet.footer {
  padding-top: 280px;
  padding-bottom: 80px;
  background-image: url('../assets/images/vector.svg'), url('../assets/images/vector2.svg') !important;
  background-position: -30px bottom, calc(100% + 60px) bottom;
  background-color: var(--extra-color) !important;
  color: #fff;
  width: 100%;

  h3 {
    font-weight: 700;
    font-size: 55px;
    color: #fff;
    line-height: 1.2;
    text-transform: capitalize;
    margin-bottom: 70px;

    a {
      text-decoration: none;
    }
  }

  .contact-item {
    width: calc(100% / 3);
  }

  .email {
    color: #fff;
    opacity: .5;
    font-size: 30px;
    transition: all .3s ease;
  }

  .icon {
    width: 32px;
    height: 32px;
  }

  .socials {
    &-list {
      display: flex;
      justify-content: space-between;
      padding: 0 80px;
    }

    &-item {
      opacity: .3;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 1263px) {
    h3 {
      font-size: 40px;
    }

    .contact {
      flex-direction: column;

      &-item {
        width: 100%;
      }
    }

    .email {
      font-size: 23px;
    }

    .icon {
      display: none;
    }

    .socials {
      margin-top: 20px;

      &-list {
        padding: 0;
        justify-content: unset;
        margin-bottom: 20px;
      }

      &-item {
        margin-right: 15px;

        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }

  @media (max-width: 479px) {
    background-position: 100% bottom, calc(100% + 70%) bottom;
  }
}
</style>
