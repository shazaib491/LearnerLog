

---

# Express Application Setup

---

## Importing Essential Libraries

---

### Express Web Application Framework

```javascript
const express = require("express");
```

**Description**:  
Import the Express library to provide the web application framework functionalities.

**Translation**:  
_Express library ko web application framework ke liye import karna._

---

### Student Routes

```javascript
const studentRoutes = require("./routes/student.route");
```

**Description**:  
Routes dedicated to managing student operations.

**Translation**:  
_Student operations ko manage karne wale routes._

---

### Error Handling Utility

```javascript
const { errorHandler } = require("./utils/error.handler");
```

**Description**:  
A utility function designed to handle application errors.

**Translation**:  
_Application mein errors handle karne ka utility function._

---

### Environment Variables Configuration

```javascript
require("dotenv").config();
```

**Description**:  
Configure environment variables from the `.env` file.

**Translation**:  
_.env file se environment variables ko set karna._

---

### Database Connection

```javascript
require("./utils/db.connection");
```

**Description**:  
Establish and configure the database connection.

**Translation**:  
_Database se connection sthapit aur configure karna._

---

## Setting Up the Express Application

---

### Initializing the Express Application

```javascript
const app = express();
```

**Description**:  
Initialize the Express application.

**Translation**:  
_Express application ko shuru karna._

---

### Server Port Configuration

```javascript
let PORT = process.env.PORT || 3000;
```

**Description**:  
Define the port number for the server to listen to.

**Translation**:  
_Server ke liye port number define karna._

---

### Middleware Configuration

---

#### JSON Payload Parsing Middleware

```javascript
app.use(express.json());
```

**Description**:  
Middleware to parse incoming JSON payloads from client requests.

**Translation**:  
_Middleware ka upayog aane wale JSON payloads ko parse karne ke liye._

---

#### Attach Student Routes

```javascript
app.use("/students", studentRoutes);
```

**Description**:  
Include the student routes to the application for handling student-related operations.

**Translation**:  
_Operations ko handle karne ke liye student routes ko jodna._

---

#### 404 Error Handling Middleware

```javascript
app.all("*", (req, res, next) => {
  return next({ status: 404, message: "Page Not Found" });
});
```

**Description**:  
Middleware to manage 404 errors when users try to access undefined routes.

**Translation**:  
_Adhikrit routes ke liye 404 errors ko handle karne wala middleware._

---

#### General Error Handling Middleware

```javascript
app.use(errorHandler);
```

**Description**:  
Middleware to manage various errors that can occur in the application.

**Translation**:  
_Application mein errors ko handle karne wala middleware._

---

## Starting the Express Server

---

```javascript
app.listen(PORT, () => {
  console.log(`\x1b[36m%s\x1b[0m`, '🚀 Server started!', `\x1b[32mListening on port ${PORT}\x1b[0m`);
});
```

**Description**:  
Initiate the server to listen on the predefined port number. A console log indicates successful server startup.

**Translation**:  
_Nirdharit port par server ko shuru karna._

---
