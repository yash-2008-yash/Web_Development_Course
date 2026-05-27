import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  username: { type: String, required: true, default: "None" },
  age: Number,
  isMarried: Boolean
})

export const Application = mongoose.model('application', applicationSchema)

// This file is like a schema for documents in the database.
// It defines the structure of the data that will be stored in the database.
// In this case, we have a schema for an application with three fields: username, age, and isMarried.
// The name field is a string, the age field is a number, and the isMarried field is a boolean.
// We then create a model called "application" using this schema, which we can use to interact with the database.

// We used MongoDB in the first place because it doesn't have strict rules like SQL databases.
// But now we are creating rules in MongoDB, which is like contradicting the purpose of using MongoDB in the first place.
// But using this "schema" thing gives us additional security
// If you are getting security, why not use it?

// Also, we don't have to validate every values using if and else
// That's why we are using Mongoose package for easing it