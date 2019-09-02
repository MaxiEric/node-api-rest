const platesModel = require('../models/plates.model');
const messages = require('../../config').messages;

class PlateCtrl {
	/**
	 * Get all plates.
	 * @async
	 * @param {Object} req - Express request object.
	 * @param {Object} res - Express response object.
	 */
	async getAll(req, res) {
		const plates = await platesModel.find();
		res.json(plates);
	}

	/**
	 * Save one plate by licence number.
	 * @async
	 * @param {Object} req - Express request object.
	 * @param {Object} res - Express response object.
	 */
	async saveOne(req, res) {
		const plate = new platesModel(req.body);
		await plate.save();
		res.json({ message: messages.success });
	}

	/**
	 * Get one plate by licence number.
	 * @async
	 * @param {Object} req - Express request object.
	 * @param {Object} res - Express response object.
	 */
	async getOneById(req, res) {
		const plate = await platesModel.findOne({ licence: req.params.id });
		if (!plate) res.status(404).send({ message: messages.missing });
		res.json(plate);
	}

	/**
	 * Delete one plate by licence number.
	 * @async
	 * @param {Object} req - Express request object.
	 * @param {Object} res - Express response object.
	 */
	async deleteOneById(req, res) {
		await platesModel.deleteOne({ licence: req.params.id });
		res.json({ message: messages.deleted });
	}

	/**
	 * Update one plate by licence number.
	 * @async
	 * @param {Object} req - Express request object.
	 * @param {Object} res - Express response object.
	 */
	async updateOneById(req, res) {
		await platesModel.findOneAndUpdate({ licence: req.params.id }, req.body);
		res.json({ message: messages.updated });
	}
}

module.exports = PlateCtrl;
