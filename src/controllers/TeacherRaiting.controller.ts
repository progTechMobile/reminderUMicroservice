import { Request, Response } from "express";
import { TeacherRaiting } from "../entities/TeacherRaiting";

export const getTeacherRaitings = async (req: Request, res: Response) => {
  try {
    const teacherRaitings = await TeacherRaiting.find();
    const resultado: any = [];
    teacherRaitings.forEach((elemento) => {
      const duplicado = resultado.some(
        (e: any) =>
          e["full_name"] === elemento["full_name"] &&
          e["email"] === elemento["email"]
      );
      if (!duplicado) {
        resultado.push(elemento);
      }
    });
    res.json(resultado);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
export const getSummarys = async (req: Request, res: Response) => {
  try {
    const teacherScore = await TeacherRaiting.average("score", {
        email: req.params.email,
    });
    const teacherComments = await TeacherRaiting.find({
      select: { observation: true, id: true },
      where: { email: req.params.email },
    });

    res.json({
      scoresAverage: teacherScore,
      comments: teacherComments,
    });
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
