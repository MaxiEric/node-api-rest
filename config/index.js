const config = {
	database: process.env.DB,
	endpoint: '/api',
	env: process.env.NODE_ENV,
	logging: ':method :url :status [:response-time ms] :date[web]',
	port: process.env.PORT || 3000,
	messages: {
		missing: 'Not Found',
		deleted: 'Deleted Successfully',
		updated: 'Updated Successfully',
		success: 'Created Successfully',
	},
};

module.exports = config;
