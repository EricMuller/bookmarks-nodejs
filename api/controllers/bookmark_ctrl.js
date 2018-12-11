'use strict';

var util = require('util');

var Bookmark = require('../models/bookmark');

module.exports = {
    getBookmarks: getBookmarks
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getBookmarks(req, res) {

  let bookmark = new Bookmark("url", "description");
  
  res.json([bookmark]);
}
