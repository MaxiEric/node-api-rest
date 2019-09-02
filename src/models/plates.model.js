const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlatesSchema = new Schema({
	date: { type: Object },
	licence: { type: String, required: true },
});

module.exports = mongoose.model('Plate', PlatesSchema);
