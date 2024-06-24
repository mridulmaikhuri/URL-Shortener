const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    originalUrl: {
        type: String,
        required: true
    },
    history: [{
        type: String,
        required: true
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const url = mongoose.model("short-url-db", urlSchema)
module.exports = url