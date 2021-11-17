const { global, pages, articles, categories, writers } = require("./en");
const {
  globalFR,
  pagesFR,
  articlesFR,
  categoriesFR,
  writersFR,
} = require("./fr");
const { leadFormSubmissions } = require("./lead-form-submissions.json");

module.exports = {
  globals: [global, globalFR],
  pages: [...pages, ...pagesFR],
  articles: [...articles, ...articlesFR],
  categories: [...categories, ...categoriesFR],
  writers: [...writers, ...writersFR],
  leadFormSubmissions,
};
