const Bank = require("../models/bank.model");

const getAllBank = async (req, res, next) => {
	try {
		const banks = await Bank.find({});
		if (!banks) {
			return res.status(404).json({ message: "Internal Error" });
		}
		return res.status(200).json({ message: "Success", data: banks });
	} catch (error) {
		console.log(error);
		next(error);
	}
};

//Create Bank
const createNewBank = async (req, res, next) => {
	try {
		const inputBank = req.body;
		if (!inputBank) {
			return res.status(404).json({ message: "Input Error!" });
		}

		//find same bank in db
		const { code } = inputBank;
		let bank = await Bank.findOne({ code });
		if (bank) {
			return res.status(400).json({ message: "This Bank already exist." });
		}
		//save bank in db
		bank = new Bank(inputBank);

		await bank.save();

		return res
			.status(200)
			.json({ message: "Bank added successfully", data: bank });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const updateBank = (req, res) => {
	res.send("Update Bank");
};

const deleteBank = async (req, res, next) => {
	try {
		const { code } = req.params;
		await Bank.deleteOne({ code });
		return res.status(200).json({ message: "Bank Deleted Successfully" });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const getSingleBank = async (req, res, next) => {
	try {
		const { code } = req.params;
		console.log(req.params.code);
		const bank = await Bank.findOne({ code });
		if (!bank) {
			return res.status(400).json({ message: "Bank not found!" });
		}
		return res.status(200).json({ status: "Success", data: bank });
	} catch (error) {
		console.log(error);
		next(error);
	}
};

//Branch related Controller::::
const getBankBranches = async (req, res, next) => {
	res.status(300).json({ message: "success" });
};
const createBankBranch = async (req, res, next) => {
	res.status(300).json({ message: "success" });
};
const getBankBranch = async (req, res, next) => {
	res.status(300).json({ message: "success" });
};
const updateBankBranch = async (req, res, next) => {
	res.status(300).json({ message: "success" });
};
const deleteBankBranch = async (req, res, next) => {
	res.status(300).json({ message: "success" });
};

module.exports = {
	getAllBank,
	createNewBank,
	updateBank,
	deleteBank,
	getSingleBank,
	getBankBranches,
	createBankBranch,
	getBankBranch,
	updateBankBranch,
	deleteBankBranch,
};
