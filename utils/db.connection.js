/**
 * @module mongoose 
 * @description Import the Mongoose library for MongoDB object modeling.
 * @translation MongoDB object modeling ke liye Mongoose library ko import karna.
 */
const mongoose = require("mongoose");

/**
 * @function connect
 * @description Establish a connection to the MongoDB database.
 * @translation MongoDB database se connection sthapit karna.
 */
mongoose.connect("mongodb://localhost:27017" + "/" + process.env.DB_NAME)
    .then((connectionResponse) => {
        // Log success message upon successful database connection with a green check mark
        // Database se safaltapoorvak connection hone par hara check mark ke sath success message log karna
        console.log(`\x1b[32m%s\x1b[0m`, '✅ Successfully connected to MongoDB!');
    })
    .catch((errorResponse) => {
        // Log error message if there's an issue connecting to the database with a red cross mark
        // Database se connection mein koi samasya ho toh laal cross mark ke sath error message log karna
        console.log(`\x1b[31m%s\x1b[0m`, '❌ Error connecting to MongoDB!', errorResponse);
    });

