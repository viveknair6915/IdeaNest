const Post = require("../models/post.model");
const User = require("../models/user.model");
const { uploadOnCloudinary } = require("../utils/cloudinary");
const dotenv = require("dotenv");
dotenv.config();

const handleError = (res, statusCode, message, error) => {
    return res.status(statusCode).json({ error: { message }, details: error });
};

const userNotFound = (res) => {
    return handleError(res, 404, "User Not Found!!");
};

const postNotFound = (res) => {
    return handleError(res, 404, "Post Not Found!!");
};

const createPostController = async (req, res) => {
    const { userId, caption, description } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) return userNotFound(res);

        const newPost = new Post({
            user: userId,
            caption,
            description
        });
        await newPost.save();
        user.posts.push(newPost._id);
        await user.save();

        return res.status(201).json({ message: "New Post Created Successfully!!", post: newPost });
    } catch (error) {
        return handleError(res, 500, "Error in Creating Post", error);
    }
};

const createPostWithMediaController = async (req, res) => {
    const { userId, caption, description } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) return userNotFound(res);

        const mediaUrls = [];
        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                const cloudinaryResponse = await uploadOnCloudinary(file.path);
                if (cloudinaryResponse) {
                    mediaUrls.push(cloudinaryResponse.secure_url);
                }
            }
        }

        const newPost = new Post({
            user: userId,
            caption,
            description,
            media: mediaUrls
        });
        await newPost.save();
        user.posts.push(newPost._id);
        await user.save();

        return res.status(201).json({ message: "New Post Created Successfully!!", post: newPost });
    } catch (error) {
        return handleError(res, 500, "Error in Creating Post", error);
    }
};

const getAllPostsOfCoFounderController = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    try {
        const totalPosts = await Post.countDocuments({ "user.typeOfUser": 'Founder' });
        const cofounderPosts = await Post.find({ "user.typeOfUser": 'Founder' })
            .populate('user')
            .skip(parseInt(skip))
            .limit(parseInt(limit))
            .exec();

        const totalPages = Math.ceil(totalPosts / limit);

        return res.status(200).json({
            totalPosts,
            totalPages,
            currentPage: parseInt(page),
            posts: cofounderPosts
        });
    } catch (error) {
        return handleError(res, 500, "Error in fetching co-founder posts", error);
    }
};

const getAllPostsOfInvestorController = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    try {
        const totalPosts = await Post.countDocuments({ "user.typeOfUser": 'Investor' });
        const investorPosts = await Post.find({ "user.typeOfUser": 'Investor' })
            .populate('user')
            .skip(parseInt(skip))
            .limit(parseInt(limit))
            .exec();

        const totalPages = Math.ceil(totalPosts / limit);

        return res.status(200).json({
            totalPosts,
            totalPages,
            currentPage: parseInt(page),
            posts: investorPosts
        });
    } catch (error) {
        return handleError(res, 500, "Error in fetching investor posts", error);
    }
};

const deletePostController = async (req, res) => {
    try {
        const { postId } = req.params;
        const findPost = await Post.findById(postId);
        if (!findPost) return postNotFound(res);

        await Post.deleteOne({ _id: postId });
        return res.status(200).json({ message: "Post deleted successfully." });
    } catch (error) {
        return handleError(res, 500, "Error In deleting Post", error);
    }
};


const getAllPostsController = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    try {
        const totalPosts = await Post.countDocuments();
        const allPosts = await Post.find()
            .populate('user')
            .sort({ createdAt: -1 })
            .skip(parseInt(skip))
            .limit(parseInt(limit))
            .exec();

        const totalPages = Math.ceil(totalPosts / limit);

        return res.status(200).json({
            totalPosts,
            totalPages,
            currentPage: parseInt(page),
            posts: allPosts
        });
    } catch (error) {
        return handleError(res, 500, "Error In fetching all Posts", error);
    }
};

const getAllPostByIdController = async (req, res) => {
    try {
        const { userId } = req.params;
        const allPostsOfUser = await Post.find({ user: userId });
        if (allPostsOfUser.length === 0) {
            return res.status(404).json("No Posts are Created");
        }
        return res.status(200).json(allPostsOfUser);
    } catch (error) {
        return handleError(res, 500, "Error In fetching all Posts of User", error);
    }
};

const likePostController = async (req, res) => {
    const { postId } = req.params;
    const { userId } = req.body;
    try {
        const post = await Post.findById(postId);
        if (!post) return postNotFound(res);

        const user = await User.findById(userId);
        if (!user) return userNotFound(res);

        if (post.likes.includes(userId)) {
            return res.status(400).json({ message: "You already liked This Post" });
        }
        post.likes.push(userId);
        await post.save();
        return res.status(200).json({ message: "You liked the post", post });
    } catch (error) {
        return handleError(res, 500, "Internal Server Error", error);
    }
};

module.exports = {
    createPostController,
    createPostWithMediaController,
    getAllPostsOfCoFounderController,
    getAllPostsOfInvestorController,
    deletePostController,
    getAllPostsController,
    getAllPostByIdController,
    likePostController
};
