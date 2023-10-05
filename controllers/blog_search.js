const blogsearch=async (req, res) => {
    const query = req.query.query.toLowerCase();
    const blogData = req.blogData;
  
    const searchResults = _.filter(blogData, blog => _.includes(_.toLower(blog.title), query));
  
    res.json({ data: searchResults });
  }

  module.exports=blogsearch