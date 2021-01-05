const mongoose = require("mongoose");

const sellSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true
    },
    ProductQuantity: {
        type: String,
        required: true
    },
    RegistrationNumber: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    Area: {
        type: String,
        required: true
    },
    filebutton1: {
        type: String,
        required: true
    },
    filebutton2: {
        type: String,
        required: true
    },
    filebutton3: {
        type: String,
        required: true
    },
    filebutton4: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

var sell = mongoose.model('SellDetail', sellSchema);

module.exports = {
    sell: sell
}