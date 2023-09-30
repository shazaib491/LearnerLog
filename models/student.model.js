/** 
 * @module mongoose 
 * @description Import the Mongoose library for MongoDB object modeling.
 * @translation MongoDB object modeling ke liye Mongoose library ko import karna.
 */
const mongoose = require('mongoose');

/** 
 * @type {import('mongoose').Schema}
 * @description Use Mongoose's Schema constructor.
 * @translation Mongoose ka Schema constructor ka upayog karna.
 */
const Schema = mongoose.Schema;

/** 
 * @type {import('mongoose').Schema}
 * @description Define the structure of the Student document using a schema.
 * @translation Schema ka upayog karke Student document ka structure define karna.
 */
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

/** 
 * @type {import('mongoose').Model}
 * @description Create and export the Student model based on the defined schema.
 * @translation Define ki gayi schema ke basis par Student model bana kar export karna.
 */
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
