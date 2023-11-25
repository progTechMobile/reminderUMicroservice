import { Router } from "express";
import { createTeacherRaitings, deleteTeacherRaitings, getTeacherRaitings, updateTeacherRaitings } from "../controllers/TeacherRaiting.controller";
const router = Router();

router.get("/teacherRaitings", getTeacherRaitings);
router.post("/teacherRaitings", createTeacherRaitings);
router.put("/teacherRaitings", updateTeacherRaitings);
router.delete("/teacherRaitings", deleteTeacherRaitings);

export default router;