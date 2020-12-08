const mongoose = require('mongoose')

const championSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    banPickQuote: {
        type: String,
        required: true
    },
    qSkill:{
        type: String,
        required: true
    },
    rSkill:{
        type: String,
        required: true
    },
    isMeta:{
        type: Boolean,
        required: true,
        default: false
    }
})

// export the module and make championschemas is the table in mongodb (mongodb is shitty with adding "s" at the end)
module.exports = mongoose.model('championSchema', championSchema)