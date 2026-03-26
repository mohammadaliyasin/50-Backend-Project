const express = require('express');
const router = express.Router();


const postController = require('../controller/blog_post_controller');


router.post('/',postController.createPost);
router.get('/',postController.getPost);


module.exports = router;