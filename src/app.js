require("dotenv").config();
const cheerio = require("cheerio");
const api = require("./services/api");

function GetResponse(html) {
  const $ = cheerio.load(html);

  return $(".feed-post-body")
    .map((index, element) => ({
      title: $(element)
        .find(".feed-post-link")
        .text(),
      url: $(element)
        .find(".feed-post-link")
        .attr("href")
    }))
    .get();
}

async function SearchNews(GetResponse) {
  try {
    const response = await api.get("/");
    const objectReturn = await GetResponse(response.data);

    console.log(objectReturn);
    return objectReturn;
  } catch (err) {
    return err;
  }
}

SearchNews(GetResponse);
