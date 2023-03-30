import { Weather } from "./../store/types/types";
import axios, { AxiosResponse } from "axios";
import api from "../axios/index";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    // return api.get<Weather>(`/weather?q=${city}`);
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1554bf62de1c14b29324dc450618b0ca`
    );
  }
}
