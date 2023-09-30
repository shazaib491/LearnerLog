/** 
 * @module express 
 * @description Import the Express library for web application framework.
 * @translation Express library ko web application framework ke liye import karna.
 */
const express = require("express");

/** 
 * @module studentController 
 * @description Import the student controller functions.
 * @translation Student controller functions ko import karna.
 */
const studentController = require("./../controller/student.controller");

/** 
 * @module studentValidator
 * @function createStudentValidationRules
 * @description Import validation rules for creating a student.
 * @translation Ek student banane ke liye validation rules ko import karna.
 */
const {
  createStudentValidationRules,
} = require("../validators/studentValidator");

/** 
 * @type {import('express').Router}
 * @description Initialize the Express router.
 * @translation Express router ko initialize karna.
 */
const router = express.Router();

/** 
 * @route GET /allStudent 
 * @description Define a route to get all students.
 * @translation Saare students ko get karne ke liye ek route define karna.
 */
router.get("/allStudent", studentController.allStudent);

/** 
 * @route POST /saveStudent
 * @middleware createStudentValidationRules
 * @description Define a route to save a new student.
 * @translation Ek naye student ko save karne ke liye ek route define karna.
 */
router.post(
  "/saveStudent",
  createStudentValidationRules,
  studentController.addStudent
);

/** 
 * @route GET /:id 
 * @description Define a route to get a student by ID.
 * @translation ID ke hisaab se student ko get karne ke liye ek route define karna.
 */
router.get("/:id", studentController.getStudent);

/** 
 * @route PATCH /:id
 * @description Define a route to update a student by ID.
 * @translation ID ke hisaab se student ko update karne ke liye ek route define karna.
 */
router.patch("/:id", studentController.updateStudent);

/** 
 * @route DELETE /:id
 * @description Define a route to delete a student by ID.
 * @translation ID ke hisaab se student ko delete karne ke liye ek route define karna.
 */
router.delete("/:id", studentController.deleteStudent);

/** 
 * @module router
 * @description Export the router for use in the main app file.
 * @translation Main app file mein use ke liye router ko export karna.
 */
module.exports = router;
