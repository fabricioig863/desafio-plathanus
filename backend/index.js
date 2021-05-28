const express = require('express');
const app = express()
const PORT = 3000
const newsRouter = require('./routers/news');

app.use(express.static('public'));
app.use(express.static('data/uploads'));
app.use('/api', newsRouter); // => localhost:3000/api/create

app.listen(PORT, () => {
  console.log(`Server running port on ${PORT}`);
})

