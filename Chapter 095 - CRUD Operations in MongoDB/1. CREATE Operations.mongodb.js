use("CRUD_Database")

// CREATE Operations in MongoDB
// It means inserting new documents into a collection.

// insertOne() - Inserts exactly one document
db.Operations.insertOne(
  { title: "Interstellar", director: "Christopher Nolan", genre: ["Sci-fi", "Drama"], releasedYear: 2014, imdbRating: 8.7 }
)

// insertMany() - Inserts multiple documents at once (bulk insert)
db.Operations.insertMany([
  { title: "The Shawshank Redemption", director: "Frank Darabont", genre: ["Drama"], releasedYear: 1994, imdbRating: 9.3 },
  { title: "F**** C***", director: "David Fincher", genre: ["Drama", "Thriller"], releasedYear: 1999, imdbRating: 8.8 },
  { title: "The Godfather", director: "Francis Lord Coppola", genre: ["Crime", "Drama"], releasedYear: 1972, imdbRating: 9.2 }
])

// insert() - Automatically decides whether the data is 'One' or 'Many'
// This method is deprecated now, so avoiding it in projects is good
db.Operations.insert(
  { title: "The Social Network", director: "David Fincher", genre: ["Drama", "Biography"], releasedYear: 2010, imdbRating: 7.8 }
)