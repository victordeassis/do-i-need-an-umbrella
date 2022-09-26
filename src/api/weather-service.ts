import axios, { AxiosPromise } from "axios";
import { WeatherModel } from "../models/weather.model";

export const getLocationData = (geoData: GeolocationPosition): AxiosPromise<WeatherModel>  => {
    const {latitude, longitude} = geoData.coords

    return axios(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&id=524901&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)

}