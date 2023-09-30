/** 
 * @module express 
 * @description Import the Express library for web application framework.
 * @translation Express library ko web application framework ke liye import karna.
 */
const express = require("express");

/**
 * @module studentRoutes 
 * @description Routes managing student operations.
 * @translation Student operations ko manage karne wale routes.
 */
const studentRoutes = require("./routes/student.route");

/**
 * @module errorHandler
 * @description Utility function to handle errors in the application.
 * @translation Application mein errors handle karne ka utility function.
 */
const { errorHandler } = require("./utils/error.handler");

/**
 * @module dotenv
 * @function config
 * @description Configuring environment variables from .env file.
 * @translation .env file se environment variables ko set karna.
 */
require("dotenv").config();

/**
 * @module db.connection
 * @description Establish and configure database connection.
 * @translation Database se connection sthapit aur configure karna.
 */
require("./utils/db.connection");

/**
 * @type {import('express').Express}
 * @description Initialize the Express application.
 * @translation Express application ko shuru karna.
 */
const app = express();

/**
 * @type {string|number}
 * @description Define the port number for the server.
 * @translation Server ke liye port number define karna.
 */
let PORT = process.env.PORT || 3000;

/**
 * @middleware
 * @function express.json
 * @description Middleware to parse incoming JSON payloads.
 * @translation Middleware ka upayog aane wale JSON payloads ko parse karne ke liye.
 */
app.use(express.json());

/**
 * @function use
 * @description Attach the student routes for handling operations.
 * @translation Operations ko handle karne ke liye student routes ko jodna.
 */
app.use("/students", studentRoutes);

/**
 * @middleware
 * @function all
 * @description Middleware to handle 404 errors for undefined routes.
 * @translation Adhikrit routes ke liye 404 errors ko handle karne wala middleware.
 */
app.all("*", (req, res, next) => {
  return next({ status: 404, message: "Page Not Found" });
});

/**
 * @middleware errorHandler
 * @description Middleware to handle errors in the application.
 * @translation Application mein errors ko handle karne wala middleware.
 */
app.use(errorHandler);

/**
 * @function listen
 * @description Start the server on the defined port.
 * @translation Nirdharit port par server ko shuru karna.
 */
app.listen(PORT, () => {
  console.log(`\x1b[36m%s\x1b[0m`, '🚀 Server started!', `\x1b[32mListening on port ${PORT}\x1b[0m`);
});

