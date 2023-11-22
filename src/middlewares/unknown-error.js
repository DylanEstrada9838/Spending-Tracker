module.exports = function (err, request, response, next) {
	response.status(500).json({
		message: "Unexpected Error",
		messagedev: "Hubo un error no manejado internamente en el código",
		code: "ERR_UNKNOWN",
		details: err,
	});
	
};