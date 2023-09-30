---

# Error Handling Middleware for Express.js

---

## Function Declaration

```javascript
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
```

**Description**:  
This function `errorHandler` serves as middleware for Express.js to manage and address errors. It crafts responses based on the type and nature of the error.

**Translation**:  
_Errors ko handle karne aur appropriate messages ke saath respond karne ke liye ek middleware._

---

## Extracting Error Details

```javascript
// Extract necessary details from the error object
// Error object se zaroori details extract karna
const { status = 500, message, stack, errors } = err;
```

**Description**:  
From the incoming error object, necessary details such as status, message, stack, and any other errors are extracted.

**Translation**:  
_Error object se zaroori details extract karna._

---

## Checking Application Environment

```javascript
// Check the application's environment (development or production)
// Application ke environment (development ya production) ko check karna
const env = process.env.NODE_ENV || "development";
```

**Description**:  
Determine the application's current environment, be it development or production. This is vital for the subsequent decision on revealing error stacks.

**Translation**:  
_Application ke environment (development ya production) ko check karna._

---

## Structuring Error Response

```javascript
// Create a basic structure for the error response
// Error response ke liye basic structure banana
let errorResponse = {
    message: message || "An error occurred.",
};
```

**Description**:  
Initiate a basic structure for the error response. At the least, it will have a message detailing the error.

**Translation**:  
_Error response ke liye basic structure banana._

---

## Adding Stack in Development Mode

```javascript
// If in development mode, add detailed error stack for debugging
// Agar development mode mein hain, toh debugging ke liye detailed error stack add karna
if (env === "development") {
    errorResponse.stack = stack;
}
```

**Description**:  
If the application is in development mode, include the error stack in the response for detailed debugging.

**Translation**:  
_Agar development mode mein hain, toh debugging ke liye detailed error stack add karna._

---

## Handling Specific Status Codes

```javascript
// Using the status code to send specific error messages
// Status code ka upayog specific error messages bhejne ke liye karna
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

**Description**:  
Based on the error's status code, specific and tailored error messages are sent to aid users and developers alike. The switch case facilitates easy handling of numerous error types, such as `400 (Bad Request)`, `401 (Authentication Failed)`, and more.

**Translation**:  
_Status code ka upayog specific error messages bhejne ke liye karna._
```
---

