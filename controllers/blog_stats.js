const blogstats= async (req, res) => {
    const blogData = req.blogData;
  
    const totalBlogs = blogData.length;
    const longestTitleBlog =  _.maxBy(blogData, 'title.length');
    const privacyBlogs =_.filter(blogData, blog => _.includes(_.toLower(blog.title), 'privacy'));
    const uniqueTitles = _.uniqBy(blogData, 'title').map(blog => blog.title);

    
    
    res.json({
        data:{
            totalBlogs,
      longestTitle: longestTitleBlog.title,
      privacyBlogs: privacyBlogs.length,
      uniqueTitles
        }
      
    });
  }

  module.exports=blogstats;