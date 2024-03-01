<template>
  <v-container fluid class="pa-0 projects">
    <v-card
      class="todo-app"
      max-width="450"
    >
      <div class="todo-app-header">
        <div class="todo-app-header__item todo-app-header__left px-6 py-6">
          <h3 class="todo-app-header__title mt-4">Your <br>Things</h3>
          <p class="todo-app-header__time mb-0">{{ currentTime }}</p>
        </div>
        <div class="todo-app-header__item todo-app-header__right px-6 py-6">
          <div class="todo-app-header__sum">
            <div class="todo-app-header__sum-item mr-4">
              <span class="todo-app-header__sum-number">{{ personalTask }}</span>
              <span class="todo-app-header__sum-cat">Personal</span>
            </div>
            <div class="todo-app-header__sum-item">
              <span class="todo-app-header__sum-number">{{ businessTask }}</span>
              <span class="todo-app-header__sum-cat">Business</span>
            </div>
          </div>
          <div class="todo-app__chart">
            <v-progress-circular :value="completedPercent" class="mr-2"></v-progress-circular>
            <span class="todo-app__percent">{{ completedPercent }}% done</span>
          </div>
        </div>
      </div>

      <div class="todo-app-list">
        <v-list three-line v-if="todoList.length">
          <template v-for="(item, index) in todoList">
            <v-list-item
              :key="index"
              class="px-6"
            >
              <v-checkbox
                input-value="true"
                value
                class="mr-2"
                v-model="item.is_done"
                @change="checkDone(item)"
              ></v-checkbox>

              <v-list-item-content>
                <div
                  class="flex-1 todo-app__text"
                  :class="{ 'todo-app__text--done': item.is_done }"
                  :id="'text_' + item.id"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                </div>
                <v-btn
                  class="ml-2"
                  color="indigo"
                  icon
                  @click="removeTodo(item)"
                >
                  <v-icon dark>
                    mdi-close
                  </v-icon>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>

        <h3 v-else>Add some things</h3>
      </div>

      <v-card-actions class="px-6 py-6">
        <p class="todo-app__completed d-flex mb-0">
          COMPLETED
          <span class="todo-app__badge ml-2">
            {{ completedTask }}
          </span>
        </p>

        <v-btn
          fab
          dark
          class="todo-app__btn-add"
          @click="addNew"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Todo } from '@/shared/models/todo';
import moment from 'moment';

@Component({
  name: 'TodoPage',
})
export default class TodoPage extends Vue {
  todoList: Todo[] = [];

  get completedTask() {
    const result = this.todoList.filter((item: Todo) => item.is_done);
    return result.length;
  }

  get personalTask() {
    const result = this.todoList.filter((item: Todo) => item.isPersonal);
    return result.length;
  }

  get businessTask() {
    const result = this.todoList.filter((item: Todo) => item.isBusiness);
    return result.length;
  }

  get completedPercent() {
    const total = this.todoList.length;
    if (!total) {
      return 0;
    }

    const percent = this.completedTask * 100 / total;

    return Math.round(percent);
  }

  get currentTime() {
    return moment().format('ll');
  }

  mounted() {
    const todoData: any = localStorage.getItem('todo');
    if (todoData) {
      this.todoList = JSON.parse(todoData).map((item: Todo) => new Todo().deserialize(item));
    }
  }

  addNew() {
    this.$router.push({ name: 'TodoCEPage' });
  }

  removeTodo(item: Todo) {
    this.todoList = this.todoList.filter((i: Todo) => i.id !== item.id);
    localStorage.setItem('todo', JSON.stringify(this.todoList));
  }

  checkDone(item: Todo) {
    localStorage.setItem('todo', JSON.stringify(this.todoList));
    const element = document.getElementById(`text_${item.id}`);
    if (element && item.is_done) {
      element.classList.add('todo-app__text--done');
    }

    if (element && !item.is_done) {
      element.classList.remove('todo-app__text--done');
    }
  }
}
</script>
<style lang="scss">
.theme--light.v-sheet {
  background-color: #fff !important;
}

.theme--light.v-application {
  background: #11c1d205;
}

.todo-app {
  &-header {
    background-image: url("../../assets/images/todo-bg.jpg");
    height: 210px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-position: center;
    background-size: cover;

    &__left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 60%;
      position: relative;

      &::after {
        content: '';
        width: 100%;
        height: 4px;
        background: linear-gradient(144deg, var(--todo-pink) 0%, var(--todo-bg-submain) 100%);
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }

    &__right {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: end;
      background: rgb(8 8 8 / 32%);
    }

    &__title {
      color: #fff !important;
      font-size: 38px;
      font-weight: 400;
      line-height: 40px;
    }

    &__time {
      opacity: 0.8;
      letter-spacing: 1px;
    }

    &__item {
      height: 100%;
    }

    &__sum {
      display: flex;
      justify-content: end;
      margin-top: 45px;

      &-item {
        display: flex;
        flex-direction: column;
        letter-spacing: 1px;
      }

      &-number {
        font-size: 28px;
        text-align: right;
      }

      &-cat {
        opacity: 0.8;
        line-height: 20px;
        font-size: 13px;
      }
    }
  }

  &-list {
    height: 500px;
    overflow: auto;
    position: relative;

    h3 {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      font-size: 23px;
      color: #9b9daf;
      font-weight: 300;
    }
  }

  &__completed {
    font-weight: 500;
    color: #9b9daf;
    letter-spacing: 1px;
  }

  &__badge {
    width: 25px;
    height: 25px;
    background: #fd9f9542;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: var(--todo-pink);
    font-weight: 700;
    font-size: 14px;
  }

  &__chart {
    opacity: 0.8;
    display: flex;
  }

  &__percent {
    width: 68px;
    display: block;
    text-align: right;
  }

  &__text {
    &--done {
      opacity: 0.5;

      .v-list-item__title,
      .v-list-item__subtitle {
        text-decoration: line-through;
      }
    }
  }

  &__btn-add {
    background-color: var(--todo-bg-submain) !important;
  }

  .v-list {
    background: transparent !important;
  }

  .v-list-item {
    align-items: flex-start;
  }

  .v-list-item__content {
    flex-wrap: nowrap;
    align-self: flex-start !important;

    .v-btn {
      border: none;
      color: #9b9daf !important;
      flex: none;
    }

    .v-icon {
      height: 20px;
      font-size: 20px;
      width: 20px;
    }
  }

  .v-card__actions {
    display: flex;
    justify-content: space-between;
    // position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
  }

  .v-input__control {
    .v-icon {
      color: var(--todo-bg-submain) !important;
    }
  }

  .v-input {
    margin: 0;
    padding: 12px 0;
  }

  .v-divider--inset:not(.v-divider--vertical) {
    margin-right: 72px;
  }

  .v-progress-circular {
    color: var(--todo-bg-submain);
  }

  .v-progress-circular__underlay {
    stroke: rgb(247 246 246 / 40%);
  }

  .flex-1 {
    flex: 1;
  }
}

@media (max-width: 600px) {
  .todo-app {
    &-header__right {
      width: 45%;
    }

    &-list {
      height: calc(100vh - 104px - 210px);

      h3 {
        transform: translate(-50%, -30%);
        top: 30%;
      }
    }
  }
}
</style>
