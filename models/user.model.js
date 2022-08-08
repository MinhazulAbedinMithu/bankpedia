const { model, Schema } = require("mongoose");

const userSchema = new Schema({
	name: {
		type: String,
		required: [true, "Name should be provide"],
		minLength: [2, "Name is too short"],
		maxLength: [20, "Name less than 20 characters"],
	},
	email: {
		type: String,
		required: [true, "Must be provide Email"],
		validate: {
			validator: function (v) {
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
			},
			message: (props) => `${props.value} is not valid.`,
		},
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		minLength: [6, "Password is too short"],
	},
	roles: [String],
	accountStatus: {
    type: String,
    enum: ["NORMAL", "PENDING", "VERIFIED", "REJECTED"]
  },
});

const User = model("User", userSchema);
module.exports = User;
