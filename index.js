const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const app = express();
const PORT = 8000;
const routes=require('./routes')
// Middleware to fetch blog data

app.use('/api',routes)




// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
