const mongoose = require('mongoose');
const db = process.env.MONGO_URI;

exports.mongodbConnection = async () => {
mongoose.connect(db)
.then(() => {
    console.log('Connected to MongoDB on port ' + db);
})
.catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
});
}

// const mongoose = require("mongoose");
// const db = process.env.MONGO_URI;

// exports.databaseConnection = async () => {
//   mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
//   mongoose.connection.once("connected", () =>
//     console.log("Connected to MongoDB to " + db)
//   );
//   mongoose.connection.on("error", (err) =>
//     console.log("Error connecting to MongoDB...", err)
//   );
// };
