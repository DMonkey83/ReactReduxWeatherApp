import axios from 'axios';

const API_KEY = '80e7b416cf4baacfd5debca96d0f9c54';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const Cons = console;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country) {
  const  url = `${ROOT_URL}&q=${city},${country}&units=metric`;
  const request = axios.get(url);
  Cons.log('Request:', request);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
