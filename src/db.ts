import { DataSource } from "typeorm";
import { TeacherRaiting } from "./entities/TeacherRaiting";

export const AppDataSource = new DataSource({
    type: "postgres", 
    host: process.env.HOST_DB,
    port: Number(process.env.PORT_DB) || 5432,
    username: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.NAME_DB,
    synchronize: true,
    logging: true,
    entities: [
        TeacherRaiting
    ],
    subscribers: [],
    migrations: [],
  });