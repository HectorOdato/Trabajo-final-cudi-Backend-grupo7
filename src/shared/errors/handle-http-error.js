import ErrorHandler from "./handle-error.js";

const handleHttpError = (res, error) => {
  console.error("ERROR REAL ->", error);

  if (error instanceof ErrorHandler) {
    return res.status(error.statusCode).json({ mensaje: error.message });
  }

  return res.status(500).json({ mensaje: "ERROR EN EL SERVIDOR" });
};

export default handleHttpError;

