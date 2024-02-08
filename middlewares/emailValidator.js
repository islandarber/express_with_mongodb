const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailValidator = (req, res, next) => {
  const { email } = req.body;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: `email is not valid` });
  }
  next();
};

export default emailValidator;