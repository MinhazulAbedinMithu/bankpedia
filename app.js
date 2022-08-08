const express = require("express");
const cors = require("cors");
const bankRouter = require("./routes/bank.router");
const authRouter = require("./routes/auth.router");

const app = express();

//universal middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/api/banks", bankRouter);
app.use("/api/auth", authRouter);

//Error Handling
app.use((req, res, next) => {
	res.status(400).json({ message: "Route not Found !" });
});

app.use((err, req, res, next) => {
	res.status(500).json({ message: err.message });
});

module.exports = app;
