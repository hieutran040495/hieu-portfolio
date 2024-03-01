<template>
  <div class="page-title mb-12 px-4">
    <h3 class="mb-5">Latest Projects</h3>
    <p class="mb-0">Fusce sollicitudin eros id ex maximus gravida non vitae ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'HeaderPageComponent',
})
export default class HeaderPageComponent extends Vue {
  @Prop() title: String;
}
</script>
<style lang="scss">
.page-title {
  max-width: 550px;
  margin: auto;

  h3 {
    font-size: 32px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 27px;
    }
  }
}
</style>
