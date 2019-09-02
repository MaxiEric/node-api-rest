const express = require('express');
const api = express();
const config = require('../config');
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(config.database, { useNewUrlParser: true });

api.use(morgan(config.logging));
api.use(express.json());
api.use(config.endpoint, routes);

api.listen(config.port, () => {
	console.info(`Server running on PORT ${config.port} (${config.env})`);
});
