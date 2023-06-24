const vehicleModel = require("../model/vehicleModel")

//<-------------------------------------------- getVehicles API ------------------------------------------->

const getVehicles = async function (req, res) {
	try {
		const data = await vehicleModel.find()
		console.log(data);
		res.status(200).json({ status: true, data });
	}
	catch (err) {
		res.status(500).send({ status: false, message: err.message })
	}

}


//<-------------------------------------------- getVehicles API ------------------------------------------->

const createVehicles = async function (req, res) {
	try {
		const body = req.body
		console.log(body);

		const data = await vehicleModel.create(body)

		res.status(201).json({ status: true, message: "Vehicle created successfully", data });
	}
	catch (err) {
		res.status(500).send({ status: false, message: err.message })
	}

}



module.exports = { getVehicles, createVehicles }



