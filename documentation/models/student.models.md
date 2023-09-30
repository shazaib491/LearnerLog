
---

# Mongoose Schema & Model for Student

---

## Importing Mongoose Library

```javascript
const mongoose = require('mongoose');
```

**Description**:  
Import the Mongoose library which provides MongoDB object modeling for Node.js.

**Translation**:  
_MongoDB object modeling ke liye Mongoose library ko import karna._

---

## Using Mongoose's Schema Constructor

```javascript
const Schema = mongoose.Schema;
```

**Description**:  
Leverage Mongoose's Schema constructor to define and create new schema instances.

**Translation**:  
_Mongoose ka Schema constructor ka upayog karna._

---

## Defining the Student Document Structure

```javascript
const studentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    courses: [{
        type: String
    }]
});
```

**Description**:  
Specify the structure of the `Student` document utilizing a schema. This schema ensures each student has a `firstName`, `lastName`, `age`, `grade`, and an array of `courses`.

**Translation**:  
_Schema ka upayog karke Student document ka structure define karna._

---

## Creating and Exporting the Student Model

```javascript
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
```

**Description**:  
Using the previously defined schema, a Mongoose model for `Student` is created. This model will be used to interact with the `Student` documents in the MongoDB database. Lastly, the model is exported for use in other parts of the application.

**Translation**:  
_Define ki gayi schema ke basis par Student model bana kar export karna._

---
