use("CRUD_Database")

// READ Operations in MongoDB
// It means reading(accessing) documents from a collection.

// find() - Gets us all the documents
db.Operations.find().pretty() // pretty() makes the data readable

// find(condition) - Returns all the documents which matches the given condition
db.Operations.find({ director: "David Fincher" }) // We can also give mutiple conditions

// findOne(condition) - Returns the first document to match the given condition
db.Operations.findOne({ director: "David Fincher" })

// countDocuments() returns the number of documents of the given field
db.Operations.countDocuments({ director: "Christopher Nolan" })

// We should also learn QUERY OPERATORS

// ----- 1. Comparison Operators -----
// Used to compare multiple values

// $eq - equal
// $eq - equal to
// $ne - not equal
// $gt - greater than
// $gte - greater than or equal
// $lt - less than
// $lte - less than or equal
// $in - matches any value in an array
// $nin - not in array

db.Operations.find({ imdbRating: { $gte: 9.0 } })
// This returns the documents which have IMDb rating greater-than-equal-to 9.0

db.Operations.find({ releasedYear: { $in: [1994] } })
// This returns the documents which have released in the year 1994

// ----- 2. Logical Operators -----
// Used to combine conditions

// $and - all conditions should be true
// $or - any one condition must be true
// $not - negates(reverses) the condition
// $nor - none of the conditions true

db.Operations.find({
  genre: { $not: { $in: ["Drama"] } }
})
// This returns the documents which don't belong to genre "Drama"

// ----- 3. Element Operators -----
// Check existence or type of a field

// $exists → field exists or not
// $type → field data type

db.movies.find({ oscars: { $exists: true } })
// This returns the documents which have the field "oscars"

db.movies.find({ releasedYear: { $type: "number" } })
// This returns the documents which have the data type of "releasedYear" as "number"
// Obviously, the year would be a "number". It's just an example, so chill.