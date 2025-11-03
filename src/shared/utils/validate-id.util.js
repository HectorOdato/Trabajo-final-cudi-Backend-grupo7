const validateID = (req) => {
  const { id } = req.params

  if (id === null || id === undefined || id === "") {
    throw new Error("Validator error: The id is required");
  }

  return id
}

export default validateID
