<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    :right="true"
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { MENU } from '@/shared/constants/common';

@Component({
  name: 'NavigationDrawerComponent',
})
export default class NavigationDrawerComponent extends Vue {
  @Prop() drawer: any;
  navigationDrawer: any;
  menu = MENU;
}
</script>
<style lang="scss">
</style>
