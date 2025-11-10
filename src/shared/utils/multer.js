import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'src/product/uploads/images/'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) cb(null, true);
  else cb(new Error('Solo se permiten imágenes'), false);
};

export const upload = multer({ storage, fileFilter });