const {v2 } = require("cloudinary")
const fs = require("fs")


v2.config({ 
    cloud_name: 'dyxjwfgra', 
    api_key: '121512395199285', 
    api_secret: '85srLbdMpDD_stX3DxfYox-1AgI' // Click 'View Credentials' below to copy your API secret
});

const uploadCloudinary = async (urlPath)=>{
     try {
      if(!urlPath) return null

const uploadResult = await v2.uploader
       .upload(
           urlPath, {
               public_id: 'avtar',
               resource_type:"auto"

           }
       )
       console.log("profile image upload successfully",uploadResult)
       return uploadResult.url

        
     } catch (error) {
         fs.unlinkSync(urlPath)
         return null
     }
}
module.exports = uploadCloudinary

// (async function() {

//     // Configuration
  
    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();