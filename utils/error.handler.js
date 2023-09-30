/**
 * @function errorHandler
 * @description A middleware to handle errors and respond with appropriate messages.
 * @translation Errors ko handle karne aur appropriate messages ke saath respond karne ke liye ek middleware.
 * 
 * @param {Object} err - The error object.
 * @param {Object} req - The request object from Express.js.
 * @param {Object} res - The response object from Express.js.
 * @param {Function} next - The next middleware function in the Express.js route.
 */
exports.errorHandler = (err, req, res, next) => {
  
  // Extract necessary details from the error object
  // Error object se zaroori details extract karna
  const { status = 500, message, stack, errors } = err;

  // Check the application's environment (development or production)
  // Application ke environment (development ya production) ko check karna
  const env = process.env.NODE_ENV || "development";

  // Create a basic structure for the error response
  // Error response ke liye basic structure banana
  let errorResponse = {
    message: message || "An error occurred.",
  };

  // If in development mode, add detailed error stack for debugging
  // Agar development mode mein hain, toh debugging ke liye detailed error stack add karna
  if (env === "development") {
    errorResponse.stack = stack;
  }

  // Using the status code to send specific error messages
  // Status code ka upayog specific error messages bhejne ke liye karna
  switch (status) {
    case 400:
      res
        .status(400)
        .json({ errors, ...errorResponse, message: message || "Bad Request." });
      break;
    case 401:
      res.status(401).json({
        ...errorResponse,
        message: message || "Authentication Failed.",
      });
      break;
    case 403:
      res.status(403).json({
        ...errorResponse,
        message: message || "Forbidden. You don't have permission.",
      });
      break;
    case 404:
      res
        .status(404)
        .json({ ...errorResponse, message: message || "Resource Not Found." });
      break;
    default:
      res.status(500).json({
        ...errorResponse,
        message: message || "Internal Server Error.",
      });
  }
};
