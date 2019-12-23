const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema(
    {
        name : {type: String, required: true, max: 100},
        password : {type: String, required: true},
        email : {type: String, required: true},
        phone : {type: Number, required: true},
        college : {type: String, required: true},
        events : [{type: Schema.Types.ObjectId, ref : "Events"}],
        accomodation : {type: Schema.Types.ObjectId, ref: "Accomodation"}
    }
);

module.exports = mongoose.model("User", UserSchema);