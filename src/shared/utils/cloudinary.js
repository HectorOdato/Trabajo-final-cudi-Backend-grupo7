import { v2 as cloudinary } from "cloudinary";

export const subirImagenCloudinary = async (filePath) => {
    const fs = await import('fs'); 
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "productsEcommerseUTN" 
        });
        fs.default.unlinkSync(filePath); 
        return result; 
    } catch (error) {
        fs.default.unlinkSync(filePath); 
        console.error("Error al subir a Cloudinary:", error);
        throw new Error("Fallo al subir la imagen a Cloudinary");
    }
};