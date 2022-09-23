import axios from "axios";

export const getLocationData = (geoData: GeolocationPosition) => {
    const {latitude, longitude} = geoData.coords
    axios(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&id=524901&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
    .then(response => {
        console.log(response.data);
      }, error => {
        console.log(error);
      });
}