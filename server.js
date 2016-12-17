const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(port, ()=>{
  console.log(`Server listening on ${port}`);
});