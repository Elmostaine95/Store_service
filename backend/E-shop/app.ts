import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import settings from "./src/libs/settings";
import {
  sequelize as db,
  AssociateModels,
  SequelizeModel,
} from "./src/libs/database";
// import { RootRouter } from "./src/routers";
const env = process.env.NODE_ENV;

//Intialization of express app
const app = express();
const moduleName = settings.app.module;
const port = process.argv[2] || settings.app.backendPort || 5000;
const corsOptions = settings.corsOptions;

app.use(bodyParser.json());
app.use(cors(corsOptions));
// app.use("/", RootRouter);

//Database configuration for application
db.sync()
  .then(async () => {
    const models: object = db.models;
    return await AssociateModels(models as Array<SequelizeModel>).then(() => {
      
      //Start app and show app info
      return app.listen(port, () => {
        console.log(
          `${moduleName} application is listening in ${env} on port ${port}`
        );
      });
    });
  })
  .catch((err: any) => console.log("error" + err));

