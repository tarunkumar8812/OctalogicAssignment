const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    company: {
        type: String,
        requried: true,
        trim: true
    },
    model: {
        type: String,
        requried: true,
        trim: true
    },
    numberOfWheels: {
        type: Number,
    },
    price: {
        type: Number,
        requried: true
    },
    category: {
        type: String,
        requried: true,
        trim: true
    },
    ratings: {
        type: Number
    },
    seats: {
        type: Number,
    },
    isAvailable: {
        type: Boolean
    },
    availableQuantity: {
        type: Number
    },
    availableDates: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, { timestamps: true })


module.exports = mongoose.model("Vehicle", vehicleSchema)