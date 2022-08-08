const { model, Schema } = require("mongoose");

const bankSchema = new Schema({
	code: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		require: [true, "Please Provide Bank Name"],
		minLength: [4, "title is too short!"],
	},
	bankType: {
		type: String,
		required: true,
		enum: ["PRIVATE", "PUBLIC", "FOREIGN", "SPECIALIZED"],
	},
	details: {
		logo: {
			type: String,
		},
		established: {
			type: String,
			required: true,
		},
		services: [String],
		telephone: String,
		email: String,
		swiftCode: String,
	},
	branches: [
		{
			brCode: {
				type: String,
				required: true,
			},
			branchName: {
				type: String,
				required: [true, "Please Provide Branch name"],
			},
			district: String,
			routingNo: String,
			address: String,
			telephone: String,
			email: String,
		},
	],
	atms: [
		{
			boothName: String,
			district: String,
			address: String,
		},
	],
	loans: [
		{
			loanTitle: String,
			loanType: String,
			description: {
				type: String,
				maxLength: [200, "description is too long."],
			},
			purposeOfLoan: [String],
			loanAmount: [String],
			whoCanApply: [String],
			customerSegment: [String],
		},
	],
});

const Bank = model("Bank", bankSchema);

module.exports = Bank;
