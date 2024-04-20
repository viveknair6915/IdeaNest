const express = require("express");
const router = express.Router()
const { createPostController,createPostWithMediaController, deletePostController, getAllPostsController,getAllPostsOfInvestorController,getAllPostsOfCoFounderController, getAllPostByIdController, likePostController } = require("../controllers/post.controller")
const upload = require("../middleware/multer.middleware")


router.post('/posts', createPostController);
router.post('/posts/with-media', upload.array('media', 5), createPostWithMediaController);
router.delete('/deletepost/:postId',deletePostController);
router.get('/allposts',getAllPostsController)
router.get('/posts/investors', getAllPostsOfInvestorController);
router.get('/posts/cofounders', getAllPostsOfCoFounderController);
router.get('/posts/:userId',getAllPostByIdController)
router.post("/like/:postId",likePostController)


module.exports = router