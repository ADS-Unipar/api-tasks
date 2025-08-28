const { default: axios } = require("axios");

const API = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 10000,
});

module.exports = API;