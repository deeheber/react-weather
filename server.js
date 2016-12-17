const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.use((req, res, next)=>{
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static(__dirname + '/dist'));

app.listen(port, ()=>{
  console.log(`Server listening on ${port}`);
});