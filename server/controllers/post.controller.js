const Post = require("../models/post.model");
const User = require("../models/user.model");
const { uploadOnCloudinary } = require("../utils/cloudinary")
const dotenv = require("dotenv");
dotenv.config();

// Controller for creating a post with or without media
const createPostController = async (req, res) => {
    const { userId, caption, description } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json("User Not Found!!");
        }

        const newPost = new Post({
            user: userId,
            caption,
            description
        });
        await newPost.save();
        user.posts.push(newPost._id);
        await user.save();

        return res.status(201).json({ msg: "New Post Created Successfully!!", post: newPost });
    } catch (error) {
        return res.status(500).json({ msg: "Error in Creating Post", err: error });
    }
};

const createPostWithMediaController = async (req, res) => {
    const { userId, caption, description } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json("User Not Found!!");
        }

        const mediaUrls = [];
        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                const cloudinaryResponse = await uploadOnCloudinary(file.path);
                if (!cloudinaryResponse) {
                    continue;
                }
                mediaUrls.push(cloudinaryResponse.secure_url);
            }
        }

        const newPost = new Post({
            user: userId,
            caption,
            description,
            media: mediaUrls // Array of media URLs
        });
        await newPost.save();
        user.posts.push(newPost._id);
        await user.save();

        return res.status(201).json({ msg: "New Post Created Successfully!!", post: newPost });
    } catch (error) {
        return res.status(500).json({ msg: "Error in Creating Post", err: error });
    }
};


const deletePostController = async(req, res) => {
    try {
        const {postId} = req.params;
        const findPost = await Post.findById(postId);
        if (!findPost) {
            return res.status(404).json("No Post Found!!");
        }
        await Post.deleteOne({_id: postId});
        return res.status(200).json({ msg: "Post deleted successfully." });
    } catch (error) {
        return res.status(500).json({ msg: "Error In deleting Post", error });
    }
};

const getAllPostsController = async(req, res) => {
    try {
        const allPosts = await Post.find();
        if (allPosts.length === 0) {
            return res.status(404).json("No Post Found");
        }
        return res.status(200).json(allPosts);
    } catch (error) {
        return res.status(500).json({ msg: "Error In fetching all Posts", error });
    }
};

const getAllPostByIdController = async(req, res) => {
    try {
        const {userId} = req.body;
        const allPostsOfUser = await Post.find({ user: userId });
        if (allPostsOfUser.length === 0) {
            return res.status(404).json("No Posts are Created");
        }
        return res.status(200).json(allPostsOfUser);
    } catch (error) {
        return res.status(500).json({ msg: "Error In fetching all Posts of User", error });
    }
};

const likePostController = async (req, res) => {
    const { postId } = req.params;
    const { userId } = req.body;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json("No Post found");
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json("User Not Found");
        }
        if (post.likes.includes(userId)) {
            return res.status(400).json("You already liked This Post");
        }
        post.likes.push(userId);
        await post.save();
        return res.status(200).json({ msg: "You liked the post", post });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", error });
    }
};

module.exports = { createPostController,createPostWithMediaController, deletePostController, getAllPostsController, getAllPostByIdController, likePostController };
