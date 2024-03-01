<template>
  <div class="page-title-horizontal d-flex px-4">
    <div class="main-title">
      <span>{{ title }}</span>
      <h3>{{ subTitle }}</h3>
    </div>
    <p class="mb-0 mt-4 mt-lg-0 description">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'HeaderPageHorizontalComponent',
})
export default class HeaderPageHorizontalComponent extends Vue {
  @Prop() title: String;
  @Prop() subTitle: String;
  @Prop() description: String;
}
</script>
<style lang="scss">
.page-title-horizontal {
  margin-bottom: 50px;

  .main-title,
  .description {
    width: 50%;
  }

  h3 {
    font-size: 32px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
   flex-direction: column;

    .main-title,
    .description {
      width: 100%;
    }
  }
}
</style>
