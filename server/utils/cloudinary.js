const cloudinary = require('cloudinary').v2;
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudnary = async(localFilePath) => {
   try {
     if (!localFilePath) return null;
     const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto"
     });
     console.log("file is uploaded Successfully", response.url);
     return response;
   } catch (error) {
      fs.unlinkSync(localFilePath);
      return null;
   }
}

module.exports = { uploadOnCloudnary };
