import axios from "axios";

const api = axios.create({
  baseURL:
    "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=1554bf62de1c14b29324dc450618b0ca",
  // process.env.REACT_APP_API_UR,
});

// api.interceptors.request.use((config) => {
//   config.url =
//     config.url + "&units=metric" + "&appid=" + process.env.REACT_APP_API_KEY;
//   return config;
// });

export default api;
