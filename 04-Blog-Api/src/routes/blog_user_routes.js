const express = require('express');
const router = express.Router();


const userController = require('../controller/blog_user_controller');


router.post('/',userController.createPost);


module.exports = router;