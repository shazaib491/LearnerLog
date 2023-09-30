---

# Validation Rules using Express-validator

---

## Importing Validation Functions

```javascript
/** 
 * @module express-validator 
 * @description Import validation functions from 'express-validator'.
 * @translation 'express-validator' se validation functions ko import karna.
 */
const { check, body } = require("express-validator");
```

**Description**:  
This section imports specific validation functions (`check` and `body`) from the `express-validator` package, a set of express.js middlewares for validations.

**Translation**:  
_'express-validator' se validation functions ko import karna._

---

## Validation Rules for Creating a Student

```javascript
/**
 * @exports createStudentValidationRules
 * @type {Array}
 * @description Array of validation middlewares for creating a student.
 * @translation Ek student banane ke liye validation middlewares ki array.
 */
```

**Description**:  
Here, an array of validation rules named `createStudentValidationRules` is exported. These rules are used when creating a student to ensure data integrity.

**Translation**:  
_Ek student banane ke liye validation middlewares ki array._

### Specific Validation Rules

1. **Validating First Name**:
   Ensure that the 'firstName' field is a string.
   ```javascript
   check("firstName").isString().withMessage("First name must be a string");
   ```

2. **Validating Last Name**:
   Ensure that the 'lastName' field is a string.
   ```javascript
   check("lastName").isString().withMessage("Last name must be a string");
   ```

3. **Validating Age**:
   The 'age' field should be an integer greater than 0.
   ```javascript
   check("age").isInt({ min: 1 }).withMessage("Age must be an integer greater than 0");
   ```

4. **Validating Grade**:
   Ensure that the 'grade' field is a string.
   ```javascript
   check("grade").isString().withMessage("Grade must be a string");
   ```

5. **Validating Courses Array**:
   The 'courses' field should be an array with a maximum length of 5.
   ```javascript
   body("courses").isArray({ max: 5 }).withMessage("Courses must be an array with a maximum of 5 courses");
   ```

6. **Validating Each Course**:
   Each course inside the 'courses' array should be a string.
   ```javascript
   body("courses.*").isString().withMessage("Each course must be a string");
   ```

---

## Additional Note

_**Note**: You can also add validation rules for tasks such as updating a student, deleting, and more._

**Translation**:  
_Aap student ko update karne, delete karne, aadi ke liye bhi validation rules jod sakte hain._

---
