var userRoutes = require('./userRoutes');
var techologieRoutes = require('./technologieRoutes');
module.exports = function(router) {
	return {
		userRoutes: userRoutes(router),
		techologieRoutes: techologieRoutes(router) 
	};
};