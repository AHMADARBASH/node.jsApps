const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
//---------------------------------------



 // => This runs on Get method
router.get('/addProduct', (request, response, next) => {
    response.sendFile(path.join(rootDir,'views','add-product.html'));

});
// this runs on POST mthod
router.post('/add-product', (request, response, next) => {
    console.log(request.body);
    response.redirect('/');
});

module.exports = router;