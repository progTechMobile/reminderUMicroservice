import { Request, Response } from "express";
import { TeacherRaiting } from "../entities/TeacherRaiting";

export const getTeacherRaitings = async (req: Request, res: Response) => {
  try {
    const TeacherRaitings = await TeacherRaiting.find();
    res.json(TeacherRaitings);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const createTeacherRaitings = async (req: Request, res: Response) => {
  try {
    const TeacherRaitings = await TeacherRaiting.create(req.body).save();
    res.json(TeacherRaitings);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const updateTeacherRaitings = async (req: Request, res: Response) => {
  try {
    const TeacherRaitings = await TeacherRaiting.update(
      { id: Number(req.params.id) },
      req.body
    );
    res.json(TeacherRaitings);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteTeacherRaitings = async (req: Request, res: Response) => {
  try {
    const TeacherRaitings = await TeacherRaiting.delete({
      id: Number(req.params.id),
    });
    res.json(TeacherRaitings);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
