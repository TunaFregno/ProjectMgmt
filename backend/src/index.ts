import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import connectDB from "./config/db";

const port = process.env.PORT || 8000;

const app = express();

//connect to database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => console.log(`Server running on ${port}`));
