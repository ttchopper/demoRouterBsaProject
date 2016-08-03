var apiResponse = require('express-api-response');
var userRepository = require('../repositories/userRepository');

module.exports = function(router) {
	router.route('/user/:id')

	.get(function (req, res, next) {
		userRepository.getById(req.params.id, function(err, data) {
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse)

	.put(function (req, res, next) {
		userRepository.update(req.params.id, req.body ,function(err, data) {
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse)

	.delete(function (req, res, next) {
		userRepository.delete(req.params.id,function(err, data) {
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);


	router.route('/user/')

	.get(function (req,res,next) {
		userRepository.getAll(function (err,data) {
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse)

	.post(function(req, res, next) {
		userRepository.add(req.body, function(err, data) {
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);
};