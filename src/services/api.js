const axios = require("axios");

const api = axios.create({
  baseURL: process.env.URL
});

module.exports = api;
