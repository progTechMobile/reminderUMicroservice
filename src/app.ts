import express from "express";
import morga from "morgan";
import cors from "cors";
import bodyParser from 'body-parser';

import routesTeacherRaitings from './routes/TeacherRaiting.routes'


const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send('Ready!!!');
});

app.use(morga("dev"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Origin",
      "X-Requested-With",
      "Accept",
    ],
    credentials: false,
    optionsSuccessStatus: 200,
  })
);

app.use(routesTeacherRaitings);

export default app;