const express = require('express');
const path = require('path');
const shopRoutes = express.Router();
const rootDir = require('../util/path');
//----------------------------------------------

shopRoutes.get('/', (request, response, next) => {
    response.sendFile(path.join(rootDir,'views','shop.html'))
});


module.exports = shopRoutes;


