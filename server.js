const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, function() {
    console.log(`🌎  ==>  Server now listening on PORT ${PORT}!`);
  });
