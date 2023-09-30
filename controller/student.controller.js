/** 
 * @module studentModel 
 * @description Import the student model.
 * @translation Student model ko import karna.
 */
const studentModel = require("./../models/student.model");

/** 
 * @module express-validator 
 * @function validationResult 
 * @description Import the validationResult function from express-validator.
 * @translation express-validator se validationResult function ko import karna.
 */
const { validationResult } = require("express-validator");

/**
 * @function addStudent
 * @async
 * @description Add a new student to the database.
 * @translation Naye student ko database mein add karna.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
exports.addStudent = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next({ status: 400, errors: errors.array() });
    }
    try {
        const result = await studentModel.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            grade: req.body.grade,
            courses: req.body.courses,
        });
        res.status(201).json({
            message: "Student added successfully",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((val) => val.message);
            return next({ status: 400, message: messages.join(", ") });
        }
        // Handling other unexpected errors
        return next({ status: 500, message: "Error while adding student" });
    }
};

/**
 * @function allStudent
 * @async
 * @description Retrieve all students from the database.
 * @translation Database se saare students ko retrieve karna.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
exports.allStudent = async (req, res, next) => {
    try {
        const allStudent = await studentModel.find();

        if (allStudent.length === 0) {
            return next({ status: 404, message: "No student records found." });
        }

        res.status(200).json({
            message: "All students fetched",
            allStudent,
        });
    } catch (error) {
        console.error("Error fetching students:", error);
        return next({ status: 500, message: "Error while fetching students" });
    }
};

/**
 * @function getStudent
 * @async
 * @description Fetch a specific student using their ID.
 * @translation Unke ID ka upayog karke ek specific student ko fetch karna.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
exports.getStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const student = await studentModel.findOne({ _id: id });
        if (!student) {
            return next({ status: 404, message: "Student not found." });
        }
        res.status(200).json({
            message: "Student details",
            student,
        });
    } catch (error) {
        return next({ status: 500, message: "Error while fetching student." });
    }
};

/**
 * @function updateStudent
 * @async
 * @description Update the details of a specific student using their ID.
 * @translation Unke ID ka upayog karke ek specific student ke details ko update karna.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
exports.updateStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updateStudent = await studentModel.updateOne(
            { _id: id },
            {
                $set: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    age: req.body.age,
                    grade: req.body.grade,
                    courses: req.body.courses,
                },
            }
        );

        if (updateStudent.nModified === 0) {
            return next({
                status: 404,
                message: "Student not found or data is the same.",
            });
        }

        res.status(200).json({
            message: "Student updated",
            updateStudent,
        });
    } catch (error) {
        return next({ status: 500, message: "Error while updating student." });
    }
};

/**
 * @function deleteStudent
 * @async
 * @description Delete a student from the database using their ID.
 * @translation Unke ID ka upayog karke ek student ko database se delete karna.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
exports.deleteStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedStudent = await studentModel.deleteOne({ _id: id });

        if (deletedStudent.deletedCount === 0) {
            return next({ status: 404, message: "Student not found." });
        }

        res.status(200).json({
            message: "Student deleted",
            deletedStudent,
        });
    } catch (error) {
        return next({ status: 500, message: "Error while deleting student." });
    }
};
