const app = require("./app");
const connectDB = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const MONGO_URI =
	process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bankpedia-bd";

connectDB(MONGO_URI)
	.then(() => {
		console.log("Database Connected");
		app.listen(PORT, () => {
			console.log(`App is running on http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
