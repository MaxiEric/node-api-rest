const express = require('express');
const router = new express.Router();

const PlatesCtrl = new (require('../controllers/plates.controller'))();

router
	.route('/plates')
	.get(PlatesCtrl.getAll)
	.post(PlatesCtrl.saveOne);

router
	.route('/plates/:id')
	.get(PlatesCtrl.getOneById)
	.delete(PlatesCtrl.deleteOneById)
	.put(PlatesCtrl.updateOneById);

module.exports = router;
