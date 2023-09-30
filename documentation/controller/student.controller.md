
---

# Student Controller: Express API Endpoints Breakdown

---

## Importing Dependencies

### Import Student Model

```javascript
const studentModel = require("./../models/student.model");
```
**Description**:  
This line imports the student model.

### Importing Express Validator Function

```javascript
const { validationResult } = require("express-validator");
```
**Description**:  
This line imports the `validationResult` function from `express-validator`.

---

## API Endpoint Functions

### Add a New Student

**Function**:  
`exports.addStudent`

**Description**:  
This function aims to validate request data and add a new student to the database.

**Lines**:

1. `const errors = validationResult(req);`  
   Checks the request for validation results. If there are errors, it populates them.

2. `if (!errors.isEmpty()) {...}`  
   If there are validation errors, return those errors.

3. `return next({ status: 400, errors: errors.array() });`  
   Sends the error array if validation fails.

4. `const result = await studentModel.create({...});`  
   Creates a new student entry using the provided data.

5. `res.status(201).json({...});`  
   Sends a 201 status response with a success message.

---

### Retrieve All Students

**Function**:  
`exports.allStudent`

**Description**:  
This function retrieves all students from the database.

**Lines**:

1. `const allStudent = await studentModel.find();`  
   Fetches all student records.

2. `if (allStudent.length === 0) {...}`  
   Checks if there are no student records.

3. `return next({ status: 404, message: "No student records found." });`  
   Sends a 404 status if no students are found.

4. `res.status(200).json({...});`  
   Sends a 200 status response with the list of students.

---

### Fetch a Specific Student

**Function**:  
`exports.getStudent`

**Description**:  
This function retrieves a specific student using their ID.

**Lines**:

1. `const id = req.params.id;`  
   Extracts the student's ID from the request parameters.

2. `const student = await studentModel.findOne({ _id: id });`  
   Fetches a specific student using the provided ID.

3. `if (!student) {...}`  
   Checks if the student with the given ID does not exist.

4. `return next({ status: 404, message: "Student not found." });`  
   Sends a 404 status if the student is not found.

5. `res.status(200).json({...});`  
   Sends a 200 status response with the student details.

---

### Update a Specific Student's Details

**Function**:  
`exports.updateStudent`

**Description**:  
This function updates a student's details using their ID.

**Lines**:

1. `const id = req.params.id;`  
   Extracts the student's ID from the request parameters.

2. `const updateStudent = await studentModel.updateOne(...);`  
   Updates the student details using the provided ID and data.

3. `if (updateStudent.nModified === 0) {...}`  
   Checks if the student's details remain unchanged.

4. `return next({...});`  
   Sends a message if the student's data remains unchanged or the student is not found.

5. `res.status(200).json({...});`  
   Sends a 200 status response with a success message.

---

### Delete a Student

**Function**:  
`exports.deleteStudent`

**Description**:  
This function deletes a student using their ID.

**Lines**:

1. `const id = req.params.id;`  
   Extracts the student's ID from the request parameters.

2. `const deletedStudent = await studentModel.deleteOne({ _id: id });`  
   Deletes the student using the provided ID.

3. `if (deletedStudent.deletedCount === 0) {...}`  
   Checks if no students were deleted.

4. `return next({ status: 404, message: "Student not found." });`  
   Sends a 404 status if the student is not found.

5. `res.status(200).json({...});`  
   Sends a 200 status response with a success message.

---
