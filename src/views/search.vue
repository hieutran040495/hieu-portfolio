<template>
  <v-container fluid class="pa-0 pt-5">
    <div class="search-box">
      <v-text-field
        v-model="text"
        label="Search"
        @input="changeValue"
      ></v-text-field>

      <div class="search-list">
        <v-card
          v-if="items.length"
          class="mx-auto"
          max-width="300"
        >
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item"
              color="primary"
              variant="plain"
              ref="searchItem"
            >
              <v-list-item-title class="px-3">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'SearchPage',
})
export default class SearchPage extends Vue {
  text: string = '';
  items: any = [];

  data: any = [
    {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
  ];

  mounted() {
    //
  }

  changeValue() {
    const value = this.text.toUpperCase();
    let result: any = [];
    this.data.map((item: any, index: number) => {
      if (value === '') {
        this.items = [];
      }

      if (value !== '' && item.title && item.title.toUpperCase().indexOf(value) > -1) {
        result.push(item);
        this.items = [ ...new Set(result) ];
      }
    });
  }
}
</script>
<style lang="scss">
.search-box {
  width: 500px;
  height: 300px;
  margin: auto;
  padding: 30px;
  border: 1px solid #ccc;
}
</style>
