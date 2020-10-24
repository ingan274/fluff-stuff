const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
const PORT = process.env.PORT || 3002;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(PORT, function() {
    console.log(`🌎  ==>  Server now listening on PORT ${PORT}!`);
  });
