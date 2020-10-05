const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

PersonSchema.plugin(mongoosePaginate);

mongoose.model("Person", PersonSchema);