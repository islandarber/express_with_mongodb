import express from 'express';
import { createStudent, getStudents, getStudent, modifyStudent } from '../controllers/StudentsControllers.js';
import emailValidator from "../middlewares/emailValidator.js";

const StudentsRouter = express.Router();


StudentsRouter.get('/', getStudents);
StudentsRouter.get('/:id', getStudent);
StudentsRouter.post('/',emailValidator, createStudent);
StudentsRouter.put('/:id',emailValidator, modifyStudent);

export default StudentsRouter;