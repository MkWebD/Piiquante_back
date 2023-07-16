// Model used
const Sauce = require("../../models/sauce");

// Method for creating a new sauce
exports.createSauce = async (req, res) => {
	try {
		const sauceObject = JSON.parse(req.body.sauce);
		delete sauceObject._id;

		await Sauce.create({
			...sauceObject,
			imageUrl: `https://${req.get("host")}/piiquante/images/${req.file.filename}`,
		});
		res.status(201).json({ message: "Sauce créée !" });
	} catch (err) {
		res.status(400).json({ error: err });
	}
};
