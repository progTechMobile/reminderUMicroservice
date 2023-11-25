import * as dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
    await AppDataSource.initialize();
    app.listen(process.env.APP_PORT || 3000, () => {
        console.log("Server running on port " + (process.env.APP_PORT || 3000));
      });
  }
  
  main();