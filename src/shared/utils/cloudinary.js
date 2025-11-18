import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';
console.log("ENV CLOUDINARY KEY:", process.env.CLOUDINARY_API_KEY);


cloudinary.config({
    
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const subirImagenCloudinary = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "productsEcommerseUTN" 
        });
        
        fs.unlinkSync(filePath); 

        return result; 
    } catch (error) {
        fs.unlinkSync(filePath); 
        console.error("Error al subir a Cloudinary:", error);
        throw new Error("Fallo al subir la imagen a Cloudinary");
    }
};
