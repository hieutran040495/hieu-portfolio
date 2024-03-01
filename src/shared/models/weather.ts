import { Deserializable } from '@/shared/interfaces/deserializable';
import { WEATHER_CONDITION } from '../enums/weather';

export interface WeatherInterface {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  city: string;
  weather_condition: string;
}

export class Weather implements Deserializable<Weather>, WeatherInterface {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  city: string;
  weather_condition: string;

  get tempCelcius() {
    return this.temp && Math.round(this.temp) + '°';
  }

  get tempFarenheit() {
    return this.temp && Math.floor(this.temp * 1.8 + 32) + '°';
  }

  get humidityString() {
    return this.humidity && this.humidity + '%';
  }

  get weatherBg() {
    switch (this.weather_condition) {
      case WEATHER_CONDITION.CLOUDS:
        return 'weather-bg-clouds-3.svg';
      case WEATHER_CONDITION.CLEAR:
        return 'weather-bg-clear-2.jpg';
      case WEATHER_CONDITION.DRIZZLE:
        return 'weather-bg-drizzle-3.jpg';
      case WEATHER_CONDITION.MIST:
        return 'weather-bg-mist-2.jpg';
      case WEATHER_CONDITION.RAIN:
        return 'weather-bg-rain.svg';
      default:
        return `weather-bg-dark-2.jpg`;
    }
  }

  deserialize(input: Partial<WeatherInterface>): Weather {
    Object.assign(this, input);
    return this;
  }
}
