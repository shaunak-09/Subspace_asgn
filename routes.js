const express = require("express");
const router = express.Router();
const blogstats = require("./controllers/blog_stats");
const blogsearch = require("./controllers/blog_search");
const memoize = require("./middleware/memoize");

router.get("/blog-stats",memoize, blogstats);

router.get("/blog-search",blogsearch);

module.exports = router;
