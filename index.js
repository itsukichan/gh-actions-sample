import API_CONFIG from "./config.main.json";

const app = document.getElementById("app");

console.log(API_CONFIG);

const getData = async () => {
  const res = await fetch(API_CONFIG.baseUrl);
  return res.json();
};
