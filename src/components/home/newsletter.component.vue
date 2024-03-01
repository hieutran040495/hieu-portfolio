<template>
  <div class="home-newsletter">
    <div class="s-container s-container--spacing px-0 d-flex justify-center align-center home-newsletter__wrp">
      <h2 class="text-center mb-7">Sign up for news & get <br /> All updates</h2>
      <div class="d-flex home-newsletter__form px-4">
        <v-text-field
          placeholder="Your email adress"
          outlined
          dense
          background-color="white"
          large
        ></v-text-field>
        <v-btn
          tile
          color="primary"
          dark
          depressed
          class="black--text"

        >
          Sign Up
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'HomeNewsletterComponent',
})
export default class HomeNewsletterComponent extends Vue {
  created() {
    //
  }
}
</script>
<style lang="scss">
.home-newsletter {
  background-color: #f7f0eb;

  &__wrp {
    flex-direction: column;
  }

  &__form {
    width: 50%;
  }

  fieldset {
    border: 0;
    border-radius: 0;
  }

  h2 {
    font-size: 44px;
    line-height: 120%;
  }

  .v-text-field__details {
    display: none;
  }

  .v-input__slot {
    padding: 15px 30px !important;
    border-radius: 0;
  }

  .v-btn {
    height: 62px !important;;
    padding: 20px 48px !important;
    font-weight: 700;
  }

  @media (max-width: 959px) {
    &__form {
      width: 100%;
    }

    h2 {
      font-size: 25px;
      line-height: 140%;
    }
  }
}
</style>
