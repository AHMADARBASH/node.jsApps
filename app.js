//----------requirments---------- 
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path');
//-------------------------------

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//App routes imported from routes folder
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((request, response, next) => {
    response.status(404).sendFile(path.join(rootDir,'views','404.html'))
});


app.listen(3000);