<template>
  <v-container class="text-center" fill-height>
    <v-row align="center">
      <v-col>
        <h1 class="display-2 primary--text">Whoops, 404</h1>

        <p>The page you were looking for does not exist</p>

        <v-btn color="primary" outlined>
          Get me out of here!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'NotFoundPage',
})
export default class NotFoundPage extends Vue {}
</script>
