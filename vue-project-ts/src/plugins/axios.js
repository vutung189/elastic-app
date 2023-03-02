// /src/plugins/axios.js
import axios from "axios";
import _ from "lodash";

axios.create({
  //   baseURL: import.meta.env.VITE_BASE_URL,
  //   headers: { "Access-Control-Allow-Origin": "*" },
  headers: { "X-Custom-Header": "foobar" },
});
// doing something with the request
axios.interceptors.request.use((request) => {
  //   request.headers = {};
  // do something with request meta data, configuration, etc
  request.baseURL = import.meta.env.VITE_BASE_URL;

  // dont forget to return request object,
  // otherwise your app will get no answer
  return request;
});

// doing something with the response
axios.interceptors.response.use(
  (response) => {
    // all 2xx/3xx responses will end here
    const { data, status } = response || {};
    const isSuccess = status === 200;
    const { content } = data;

    return { data: content, isSuccess };
  },
  (error) => {
    // all 4xx/5xx responses will end here

    return Promise.reject(error);
  }
);

export default axios;
