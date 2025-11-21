const handleHttpError = (res, error) => {
  if (error instanceof ErrorHandler) {
    res.status(error.status).json({ mensaje: error.message })
  }

  res.status(500).json({ mensaje: "ERROR EN EL SERVIDOR" })
}

export default handleHttpError