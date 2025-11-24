import { v2 as cloudinary } from "cloudinary";

export const subirImagenCloudinary = async (fileBuffer) => {
    const { Buffer } = await import('buffer'); 
    try {
        const b64 = Buffer.from(fileBuffer).toString("base64");
        let dataURI = "data:" + mimeType + ";base64," + b64; 

        const result = await cloudinary.uploader.upload(dataURI, {
            folder: "productsEcommerseUTN",
            resource_type: "auto", 
        });
        return result; 
    } catch (error) {
        console.error("Error al subir a Cloudinary:", error);
        throw new Error("Fallo al subir la imagen");
    }
};