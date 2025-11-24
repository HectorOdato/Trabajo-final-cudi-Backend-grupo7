import { v2 as cloudinary } from "cloudinary";

export const subirImagenCloudinary = async (fileBuffer, mimeType) => {
    const { Buffer } = await import('buffer'); 
    try {
        const b64 = Buffer.from(fileBuffer).toString("base64");
        let dataURI = "data:" + mimeType + ";base64," + b64; 

        const result = await cloudinary.uploader.upload(dataURI, {
            folder: "productsEcommerseUTN",
            resource_type: "image", 
        });
        return result; 
    }  catch (error) {
        console.error("ERROR DETALLADO DE CLOUDINARY:", error); 
        
        if (error.http_code === 401) {
            console.error("Cloudinary: Error de autenticación. Revisa tus credenciales.");
        }

        throw new Error("Fallo al subir la imagenasd");
    }
};