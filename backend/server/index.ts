import express from "express";
import routes from "./routes";

import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3001, () => {
  return console.log(`Server is listening at http://localhost:3001`);
});
