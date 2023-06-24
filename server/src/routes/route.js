const express = require("express")
const router = express.Router();
const { getVehicles, createVehicles } = require('../controllers/userController')


router.get('/', (req, res) => {
    return res.status(200).json({ status: true, message: "Octalogic App Server is working..." })
})

//<--------------------------- User API's ---------------------------->
router.get('/api/vehicles', getVehicles)
router.post('/api/createVehicles', createVehicles)


module.exports = router