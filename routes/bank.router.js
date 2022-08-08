const {
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
} = require("../controllers/bank.controller");

const router = require("express").Router();
router.route("/").get(getAllBank).post(createNewBank);

router.route("/:code").patch(updateBank).delete(deleteBank).get(getSingleBank);

router.route("/:code/branches").get(getBankBranches).post(createBankBranch);

router
	.route("/:code/branches/:brCode")
	.get(getBankBranch)
	.patch(updateBankBranch)
	.delete(deleteBankBranch);
module.exports = router;
