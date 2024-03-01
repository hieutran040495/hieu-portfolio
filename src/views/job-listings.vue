<template>
  <v-container fluid class="pa-0 jobs">
    <div class="jobs__header"></div>

    <div class="px-3 jobs-container">
      <div class="jobs__filter jobs-card" v-if="filters.length">
        <div class="d-flex jobs__filter-list">
          <div class="jobs__filter-item"
            v-for="data in filters"
            :key="data"
          >
            <p class="jobs__filter-text mb-0">{{ data }}</p>
            <v-btn
              dark
              depressed
              class="jobs__filter-close"
              @click="removeFilter(data)"
            >
              <v-icon dark>
                mdi-close
              </v-icon>
            </v-btn>
          </div>
        </div>

        <span class="jobs__filter-clear" @click="clearFilter">Clear</span>
      </div>

      <div class="jobs__list">
        <div
          class="jobs__list-item jobs-card mb-10 d-flex"
          v-for="(item) in jobs"
          :key="item.id"
        >
          <div class="jobs__avatar mr-3">
            <img :src="item.image_url" alt="">
          </div>

          <div class="jobs__ctn mr-3">
            <p class="mb-0">{{ item.employer_name }}</p>
            <h2>{{ item.name }}</h2>
            <ul class="d-flex jobs__availability px-0">
              <li class="mr-6">{{ item.startAtString }}</li>
              <li class="mr-6">{{ item.typeString }}</li>
              <li class="mr-6">{{ item.address }}</li>
            </ul>
          </div>

          <div class="jobs__tags">
            <v-btn
              dark
              depressed
              class="jobs__tags-item mr-2"
              v-for="tag in item.tags"
              :key="`${item.id}_${tag}`"
              @click="handleFilter(tag)"
            >
              {{ tag }}
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Job } from '@/shared/models/job';

@Component({
  name: 'JobListings',
})
export default class JobListings extends Vue {
  jobs: Job[] = [];
  filters: string[] = [];
  data: any[] = [
    {
      id: 1,
      name: 'Senior Frontend Developer',
      employer_name: 'Photosnap',
      image_url: require('@/assets/images/job-1.svg'),
      start_at: '2024-02-26 12:21:51',
      type: 'part_time',
      address: 'USA Only',
      tags: ['frontend', 'senior', 'CSS', 'javascript'],
    },
    {
      id: 2,
      name: 'Junior Frontend Developer',
      employer_name: 'Account',
      image_url: require('@/assets/images/job-2.svg'),
      start_at: '2024-02-24 12:21:51',
      type: 'full_time',
      address: 'USA Only',
      tags: ['fullstack', 'frontend', 'HTML', 'CSS', 'javascript'],
    },
    {
      id: 3,
      name: 'Junior Frontend Developer',
      employer_name: 'MyHome',
      image_url: require('@/assets/images/job-3.svg'),
      start_at: '2024-02-23 12:21:51',
      type: 'full_time',
      address: 'USA Only',
      tags: ['frontend', 'Fresher', 'HTML', 'CSS', 'javascript'],
    },
    {
      id: 4,
      name: 'Junior Developer',
      employer_name: 'Shortly',
      image_url: require('@/assets/images/job-4.svg'),
      start_at: '2024-02-22 12:21:51',
      type: 'full_time',
      address: 'USA Only',
      tags: ['frontend', 'Junior', 'HTML', 'CSS', 'javascript'],
    },
    {
      id: 5,
      name: 'Junior Frontend Developer',
      employer_name: 'Insure',
      image_url: require('@/assets/images/job-5.svg'),
      start_at: '2024-02-21 12:21:51',
      type: 'full_time',
      address: 'USA Only',
      tags: ['frontend', 'Junior', 'Vue', 'Sass', 'javascript'],
    },
    {
      id: 6,
      name: 'Front-end Dev',
      employer_name: 'The Air Filter Company',
      image_url: require('@/assets/images/job-6.svg'),
      start_at: '2024-02-20 12:21:51',
      type: 'full_time',
      address: 'USA Only',
      tags: ['frontend', 'Junior', 'React', 'Sass'],
    },
  ];

  created() {
    this.jobs = this.getNewJobs(this.data);
  }

  handleFilter(tag: string) {
    this.filters.push(tag);
    this.filters = [...new Set(this.filters)];
    this.filterJobs();
  }

  filterJobs() {
    let newData: any[] = [];
    this.data.map((item) => {
      const check = this.filters.every((v) => item.tags.includes(v));
      if (check) {
        newData.push(item);
      }
    })
    this.jobs = this.getNewJobs(newData);
  }

  clearFilter() {
    this.filters = [];
    this.jobs = this.getNewJobs(this.data);
  }

  removeFilter(filter: string) {
    this.filters = this.filters.filter((item) => filter !== item);
    this.filterJobs();
  }

  getNewJobs(data: any) {
    return data.map((item: any) => new Job().deserialize(item));
  }
}
</script>
<style lang="scss">
$m-color: #edc361;
$m-txt: #67383a;
$m-bg: #be9d4f30;
$m-bg-tags: #edc3614a;

.jobs {
  &-card {
    border-radius: 5px;
    box-shadow: 0 5px 30px 10px $m-bg;
    padding: 16px;
  }

  &-container {
    max-width: 1000px;
    margin: auto;
  }

  &__header {
    min-height: 150px;
    background-color: $m-color;
    background-position: center;
    background-size: cover;
    background-image: url('../assets/images/job-bg-header-3.svg');
  }

  &__filter {
    display: flex;
    align-items: center;

    width: 100%;
    position: relative;
    background: #fff;
    height: auto;
    margin: auto;
    bottom: 20px;
    gap: 1em;
    justify-content: space-between;

    &-list {
      flex-wrap: wrap;
    }

    &-item {
      background: $m-bg-tags;
      width: fit-content;
      border-radius: 5px;
      margin: 3px;
    }

    &-text {
      padding: 0.5em;
      display: inline-block;
      font-size: .8rem;
      font-weight: 700;
      color: $m-txt;
      letter-spacing: 0.5px;
    }

    &-close {
      &.v-btn {
        background-color: $m-color !important;
        font-size: 14px;
        min-width: 30px !important;
        height: 32px !important;
        padding: 0 !important;
        border-radius: 0 5px 5px 0;
        color: $m-txt;
      }
    }

    &-clear {
      color: $m-txt;
      background: none;
      border: none;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
    }
  }

  &__list {
    margin-top: 50px;

    &-item {
      position: relative;
      align-items: center;
      justify-content: space-between;

      &:first-child {
        border-left: 5px solid $m-color;
      }
    }
  }

  &__avatar {
    img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
    }
  }

  &__ctn {
    flex: 1;
    letter-spacing: 0.5px;

    p {
      color: $m-color;
      font-size: 1rem;
      font-weight: bold;
    }

    h2 {
      font-size: 20px;
    }
  }

  &__availability {
    font-size: .8rem;
    font-weight: 500;
    color: #7b8e8e;

    li {
      &:first-child {
        &::marker {
          font-size: 0;
        }
      }
    }
  }

  &__tags {
    &-item {
      background: $m-bg-tags !important;
      padding: 0.8em;
      border-radius: 5px;
      font-weight: 700;
      color: $m-txt !important;
    }
  }

  &--remove {
    animation: remove .5s ease-in-out forwards;
  }

  @media (max-width: 700px) {
    &__ctn {
      margin-top: 30px;
    }

    &__avatar {
      position: absolute;
      top: -30px;

      img {
        width: 60px;
        height: 60px;
      }
    }

    &__list-item {
      flex-direction: column;
      align-items: unset;
    }

    &__tags {
      margin-top: 30px;

      &-item {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
