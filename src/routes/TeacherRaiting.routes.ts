import { Router } from "express";
import { createTeacherRaitings, deleteTeacherRaitings, getTeacherRaitings, updateTeacherRaitings, getSummarys } from "../controllers/TeacherRaiting.controller";
const router = Router();

router.get("/teacherRaitings", getTeacherRaitings);
router.post("/teacherRaitings", createTeacherRaitings);
router.put("/teacherRaitings/:id", updateTeacherRaitings);
router.delete("/teacherRaitings/:id", deleteTeacherRaitings);

router.get('/summary/:email',getSummarys)

export default router;