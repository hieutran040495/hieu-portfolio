<template>
  <v-container fluid class="pa-0 projects">
    <v-card
      class="mx-auto todo-app todo-app-ce px-6 py-6"
      max-width="500"
      dark
    >
      <h2 class="text-center">Add New Thing</h2>
      <v-form ref="form">
        <v-text-field
          v-model="todo.title"
          :counter="100"
          :rules="titleRules"
          label="Title"
          required
        ></v-text-field>

        <v-text-field
          v-model="todo.description"
          :counter="255"
          :rules="desRules"
          label="Description"
          required
        ></v-text-field>

        <v-select
          v-model="todo.type"
          :items="items"
          :rules="typeRules"
          label="Type"
          required
        ></v-select>

        <div class="mt-5">
          <v-btn
            rounded
            depressed
            class="todo-app-ce-submit mb-3"
            @click="saveData"
          >
            ADD YOUR THING
          </v-btn>

          <v-btn
            rounded
            depressed
            outlined
            class="todo-app-ce-back"
            @click="back"
          >
            BACK
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Todo } from '@/shared/models/todo';

@Component({
  name: 'TodoPage',
})
export default class TodoCEPage extends Vue {
  todo: Todo = new Todo();
  data: any[] = [];
  items = [
    'personal',
    'business',
  ];

  get titleRules() {
    return [
      (v: string) => !!v || 'Title is required',
      (v: string) => (v && v.length <= 100) || 'Title must be less than 100 characters',
    ];
  }

  get desRules() {
    return [
      (v: string) => !!v || 'Description is required',
      (v: string) => (v && v.length <= 255) || 'Description must be less than 255 characters',
    ];
  }

  get typeRules() {
    return [
      (v: string) => !!v || 'Type is required',
    ];
  }

  mounted() {
    const todoData: any = localStorage.getItem('todo');
    if (todoData) {
      this.data = JSON.parse(todoData);
    }
  }

  async saveData () {
    const form: any = this.$refs.form
    const valid  = await form.validate();

    if (!valid) return;
    this.data.push(this.todo.formJSON());
    localStorage.setItem('todo', JSON.stringify(this.data));
    this.$router.push({ name: 'TodoPage' });
  }

  back() {
    this.$router.push({ name: 'TodoPage' });
  }
}
</script>
<style lang="scss">
.theme--light.v-application {
  background: #11c1d205;
}

.todo-app-ce {
  &.v-sheet {
    background: var(--todo-bg-main) !important;
  }
  label, input {
    letter-spacing: 0.5px !important;
  }

  .v-select__selection {
    text-transform: capitalize;
  }

  .v-select__selection, input {
    font-weight: 500;
  }

  .v-btn {
    width: 100%;
    height: 50px !important;
  }

  &-submit {
    background: linear-gradient(144deg, var(--todo-pink) 0%, var(--todo-bg-submain) 100%) !important;
  }

  h2 {
    font-weight: 400;
  }

  .flex-1 {
    flex: 1;
  }

  @media (max-width: 600px) {
    height: 100vh;
  }
}

.v-list-item__title {
  text-transform: capitalize;
}
</style>
