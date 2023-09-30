/** 
 * @module express-validator 
 * @description Import validation functions from 'express-validator'.
 * @translation 'express-validator' se validation functions ko import karna.
 */
const { check, body } = require("express-validator");

/**
 * @exports createStudentValidationRules
 * @type {Array}
 * @description Array of validation middlewares for creating a student.
 * @translation Ek student banane ke liye validation middlewares ki array.
 */
exports.createStudentValidationRules = [
  // Validate 'firstName' to ensure it's a string
  // 'firstName' ko validate karna taki yeh ek string ho
  check("firstName").isString().withMessage("First name must be a string"),
  
  // Validate 'lastName' to ensure it's a string
  // 'lastName' ko validate karna taki yeh ek string ho
  check("lastName").isString().withMessage("Last name must be a string"),
  
  // Validate 'age' to ensure it's an integer greater than 0
  // 'age' ko validate karna taki yeh ek integer ho jo 0 se bada ho
  check("age")
    .isInt({ min: 1 })
    .withMessage("Age must be an integer greater than 0"),
    
  // Validate 'grade' to ensure it's a string
  // 'grade' ko validate karna taki yeh ek string ho
  check("grade").isString().withMessage("Grade must be a string"),
  
  // Validate 'courses' to ensure it's an array with a max length of 5
  // 'courses' ko validate karna taki yeh ek array ho jiska adhikatam lambai 5 ho
  body("courses")
    .isArray({ max: 5 })
    .withMessage("Courses must be an array with a maximum of 5 courses"),
    
  // Validate each course in 'courses' to ensure they are strings
  // 'courses' mein pratyek course ko validate karna taki woh strings ho
  body("courses.*").isString().withMessage("Each course must be a string"),
];

// Additional note
// Aur bhi note
// You can also add validation rules for updating a student, deleting, etc.
// Aap student ko update karne, delete karne, aadi ke liye bhi validation rules jod sakte hain.
