---

# Student Routes: Express API Endpoint Definitions

---

## Importing Dependencies

### Import Express Library

```javascript
const express = require("express");
```

**Description**:  
Import the Express library to utilize its features for routing.

**Translation**:  
_Express library ko web application framework ke liye import karna._

### Import Student Controller Functions

```javascript
const studentController = require("./../controller/student.controller");
```

**Description**:  
Import the functions from the student controller to handle specific routes.

**Translation**:  
_Student controller functions ko import karna._

### Import Validation Rules for Creating a Student

```javascript
const {
  createStudentValidationRules,
} = require("../validators/studentValidator");
```

**Description**:  
Import validation rules that will be applied when creating a new student.

**Translation**:  
_Ek student banane ke liye validation rules ko import karna._

---

## Router Initialization

```javascript
const router = express.Router();
```

**Description**:  
Initialize the Express router to define endpoints.

**Translation**:  
_Express router ko initialize karna._

---

## API Endpoint Definitions

### Get All Students

```javascript
router.get("/allStudent", studentController.allStudent);
```

**Description**:  
Define an endpoint to retrieve all students from the database.

**Translation**:  
_Saare students ko get karne ke liye ek route define karna._

### Save a New Student

```javascript
router.post(
  "/saveStudent",
  createStudentValidationRules,
  studentController.addStudent
);
```

**Description**:  
Define an endpoint to add a new student, applying validation rules before saving.

**Translation**:  
_Ek naye student ko save karne ke liye ek route define karna._

### Get a Student by ID

```javascript
router.get("/:id", studentController.getStudent);
```

**Description**:  
Define an endpoint to fetch a specific student using their ID.

**Translation**:  
_ID ke hisaab se student ko get karne ke liye ek route define karna._

### Update a Student by ID

```javascript
router.patch("/:id", studentController.updateStudent);
```

**Description**:  
Define an endpoint to update the details of a student using their ID.

**Translation**:  
_ID ke hisaab se student ko update karne ke liye ek route define karna._

### Delete a Student by ID

```javascript
router.delete("/:id", studentController.deleteStudent);
```

**Description**:  
Define an endpoint to delete a specific student using their ID.

**Translation**:  
_ID ke hisaab se student ko delete karne ke liye ek route define karna._

---

## Export the Router

```javascript
module.exports = router;
```

**Description**:  
Export the router to use its defined routes in the main application file.

**Translation**:  
_Main app file mein use ke liye router ko export karna._

---

