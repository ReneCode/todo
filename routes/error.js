
function errorHandler(err, req, res, next) {
	"use scrict"

	console.log(err.message);
	console.log(err.stack);

}

module.exports = errorHandler;