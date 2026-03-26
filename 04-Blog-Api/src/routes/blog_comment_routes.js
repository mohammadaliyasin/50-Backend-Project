const express = require('express');
const router = express.Router();


const commentController = require('../controller/blog_comment_controller');


router.post('/', commentController.createComment);
router.get('/:postId', commentController.getCommentsByPost);

module.exports = router