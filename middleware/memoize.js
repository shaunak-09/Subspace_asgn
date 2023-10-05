const axios = require("axios");
const express = require("express");
const _ = require("lodash");


const options = {
  method: 'GET',
  headers: {
    'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
  }
};
const fetchBlogData = async () => {
  try {
    const response = await axios.get("https://intent-kit-16.hasura.app/api/rest/blogs",options);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch blog data");
  }
};
const memoizedFetchBlogData = _.memoize(fetchBlogData, undefined, 600000);

const memoization = async (req, res, next) => {
  try {
    const blogData = await memoizedFetchBlogData();
    req.blogData = blogData;
    next();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = memoization;
