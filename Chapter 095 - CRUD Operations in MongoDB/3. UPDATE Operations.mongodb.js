use("CRUD_Database")

// UPDATE Operations in MongoDB
// It means updating the documents with new content from a collection.

// updateOne() - Updates one document
db.Operations.updateOne(
  { title: "Interstellar" },
  { $set: { oscars: 1 } } // adds a new field called "oscars" into the existing document
)
// updateMany() - Upadtes many documents at once (bulk update)
db.Operations.updateMany(
  { director: "David Fincher" },
  { $set: { mustWatch: true } }
)

// replaceOne() - replaces one entire document (id doesn't change)
db.Operations.replaceOne(
  { title: "The Shawshank Redemption", director: "Frank Darabont", genre: ["Drama"], releasedYear: 1994, imdbRating: 9.3 },
  { title: "Whiplash", director: "Damien Chazelle", genre: ["Psychological Drama", "Musical"], releasedYear: 2014, imdbRating: 8.5 }
)

// $unset is used to delete a field from a document
db.Operations.updateOne(
  { title: "Interstellar" },
  { $unset: { oscars: "" } } // removes the "oscars" field from the document
)

// $push is used to add new elements into a documents's array
db.Operations.updateOne(
  { title: "The Godfather" },
  { $push: { genre: "Classic" } } // This adds "Classic" to the 'genre' array
)
// NOTE: We can use $addToSet instead of $push to avoid duplicates

// $pull is used to remove an element from a document's array
db.Operations.updateOne(
  { title: "The Godfather" },
  { $pull: { genre: "Classic" } } // This removes "Classic" from the 'genre' array
)