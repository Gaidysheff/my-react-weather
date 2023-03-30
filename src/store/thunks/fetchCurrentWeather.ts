import { currentWeatherSlice } from "./../slices/currentWeatherSlice";
import { WeatherService } from "../../service/WeatherService";
import { AppDispatch } from "./../store";
import api from "../../axios/index";
// console.log(api);

const fetchCurrentWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
    // console.log(api);
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
      // console.log(api);
      const res = await WeatherService.getCurrentWeather(payload);
      if (res.status === 200) {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };

export default fetchCurrentWeather;
