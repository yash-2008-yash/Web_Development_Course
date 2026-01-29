use("CRUD_Database")

// DELETE Operations in MongoDB
// It means deleting documents from a collection.

// deleteOne() - Deletes one document
db.Operations.deleteOne(
  { title: "The Godfather" } // Deletes "The Godfather" document
)

// deleteMany() - Deletes many documents (bulk delete)
db.Operations.deleteMany(
  { director: "David Fincher" } // Removes the documents which has David Fincher as the director
)

// findOneAndDelete() - Deletes one document which matches the document
db.Operations.findOneAndDelete(
  { imdbRating: { $lt: 8.6 } } // This deletes only one document which has imdbRating less than 8.6
)

// deleteMany() - Deletes all the documents which match the condition
db.Operations.deleteMany(
  { imdbRating: { $lt: 7.0 } } // This deletes all the documents which has imdbRating less than 7.0
)

// deleteMany() - Deletes all the documents from a collection
// This method should be used with caution.
db.Operations.deleteMany({})

// drop() - This deletes the collection itself
db.Operations.drop()

// dropDatabase() - This deleted the whole database itself
db.dropDatabase()