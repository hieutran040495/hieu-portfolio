<template>
  <v-container fluid class="pa-0 projects">
    <v-card
      class="weather-app px-6 py-6"
      dark
      max-width="450"
      :style="{'background-image': backgroundImage }"
    >
      <div>
        <h2 class="text-center mb-5 weather-app__title">Weather App</h2>
        <div class="d-flex">
          <v-text-field
            v-model="city"
            single-line
            outlined
            placeholder="City Name"
            @keydown.enter="checkWeather"
          ></v-text-field>
        </div>
      </div>

      <div class="weather-app__info mt-10" :style="{'height': weather.temp ? '504px' : '0px' }">
        <p class="weather-app__city mb-0">{{ weather.city }}</p>
        <h2>{{ weather.tempCelcius }}</h2>
        <p class="mb-0 weather-app__condition">{{ weather.weather_condition }}</p>
        <p class="mb-0 weather-app__temp">
          <span class="mr-3">H: {{ weather.tempCelcius }}</span>
          <span>L: {{ weather.tempFarenheit }}</span>
        </p>
        <div class="weather-app__sub-info" v-if="weather.temp">
          <p class="d-flex justify-space-between mb-3 pb-3">
            <span>
              Humidity
            </span>
            <span>{{ weather.humidityString }}</span>
          </p>

          <p class="d-flex justify-space-between mb-0">
            <span>
              Pressure
            </span>
            <span>{{ weather.pressure }}</span>
          </p>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Weather } from '@/shared/models/weather';

@Component({
  name: 'WeatherApp',
})
export default class WeatherApp extends Vue {
  apiKey = '3c73104f5cae50269ef56c922c7f7143';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en';
  city: string = '';
  tempCelcius: string = '';
  humidity: string = '';
  pressure: string = '';
  weather: Weather = new Weather();

  get titleRules() {
    return [
      (v: string) => !!v || 'Title is required',
      (v: string) => (v && v.length <= 100) || 'Title must be less than 100 characters',
    ];
  }

  get backgroundImage() {
    return `url(${require(`@/assets/images/${this.weather.weatherBg}`)})`
  }

  async checkWeather() {
    try {
      const response = await fetch(`${this.apiUrl}&q=${this.city}&appid=${this.apiKey}`);

      if (!response.ok) {
        throw new Error('Unable to fetch weather data.');
      }
      const data = await response.json();
      this.tempCelcius = Math.round(data.main.temp) + '°C';
      this.humidity = data.main.humidity + '%';
      this.pressure = data.main.pressure;
      this.weather = new Weather().deserialize(data.main);
      this.weather.city = data.name;
      this.weather.weather_condition = data.weather[0].main;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
<style lang="scss">
$txt-shadow: #6e606042;

.theme--light.v-sheet {
  background-color: #fff !important;
}
.theme--light.v-application {
  background: linear-gradient(172deg, rgba(123,91,109,1) 7%, rgba(58,51,81,1) 100%);
}

.weather-app {
  margin: auto;
  overflow: hidden;

  &__info {
    text-align: center;
    transition: height .5s;
    overflow: hidden;

    h2 {
      font-size: 90px;
      line-height: 90px;
      font-weight: 400;
    }
  }

  &__sub-info {
    margin-top: 200px;
    font-weight: 500;
    border-radius: 8px;
    background: #ffffff59;
    padding: 15px;

    p {
      &:first-child {
        border-bottom: 1px solid rgb(255 255 255 / 35%);
      }
    }
  }

  &__title,
  &__city,
  &__info h2 {
    text-shadow: 3px 3px $txt-shadow;
  }

  &__city {
    font-size: 34px;
    font-weight: 500;
  }

  &__condition {
    font-size: 20px;
    color: #ffffff9c;
    font-weight: 500;
  }

  &__temp {
    font-size: 20px;
    font-weight: 600;
  }

  &.v-card {
    border-radius: 8px;
    box-shadow: 0px 0px 3px -2px rgb(0 0 0 / 60%), 0px 10px 20px 0px rgb(0 0 0 / 30%), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;
    background-image: url("../assets/images/weather-bg-clear.svg");
    background-position: center;
    background-size: cover;
    position: relative;
  }

  .v-input__slot {
    min-height: 35px !important;
    margin-bottom: 0;
    background: #ffffff59 !important;
    border-radius: 20px;

    fieldset {
      border: 0 !important;
    }

    input {
      color: rgba(0, 0, 0, 0.87);

      &::placeholder {
        color: rgba(0, 0, 0, 0.45);
      }
    }
  }

  @media (max-width: 700px) {
    &.v-card {
      height: 100vh;
      border-radius: 0;
    }

    &__sub-info {
      position: absolute;
      bottom: 24px;
      left: 0;
      left: 24px;
      right: 24px;
    }
  }
}
</style>
