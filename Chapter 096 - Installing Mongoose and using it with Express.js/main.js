import mongoose from "mongoose";
import express from "express";

import { Application } from "./models/application_schema.js";
// This is the schema we created using Mongoose package

let conn = await mongoose.connect("mongodb://localhost:27017/application")

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const application = new Application({ age: 18, isMarried: false })
  // Even if I didn't give a name, it will be "None" because we have set the default value to "None" in the schema
  
  application.save()
  res.send(application)
  res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})