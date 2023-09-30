
---

# Node.js Express MongoDB Project

This project is built using Node.js, Express, and MongoDB. It serves as a basic backend setup with API endpoints for CRUD operations.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js & npm](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running.

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/shazaib491/LearnerLog.git
   
   cd project-name
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup Environment Variables**

   Copy the `.env` file to a new file named `.env`:

   Then, open `.env` and set the appropriate values for your environment.

4. **Start the MongoDB Server**

   Depending on your OS, the command to start MongoDB can differ. For most platforms, it's:

   ```bash
   mongod
   ```
   ```
   In Latest version it is not required 
   ```

## Running the Project

Once you've set everything up, you can run the project with:

```bash
npm start
```

This will start the Node.js server on the specified port in your `.env` file (default: 3000).

## API Endpoints

1. **Get All Students**

   - **Endpoint**: `/allStudent`
   - **Method**: `GET`

2. **Add a New Student**

   - **Endpoint**: `/saveStudent`
   - **Method**: `POST`

3. **Get a Student by ID**

   - **Endpoint**: `/:id`
   - **Method**: `GET`

4. **Update a Student**

   - **Endpoint**: `/:id`
   - **Method**: `PATCH`

5. **Delete a Student**

   - **Endpoint**: `/:id`
   - **Method**: `DELETE`

## Contributing

If you want to contribute to this project, please fork the repository, make your changes, and create a pull request. Feedback is always welcome!
---
