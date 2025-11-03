export const validateIfIsEmpty = (value) => {
  if (value === null || value === undefined || value === "") {
    throw new Error("Validator error: The attribute is required");
  }
  return value;
};
