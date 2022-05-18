const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://brunoblanquez:Lpznd076@cluster0.fqazb.mongodb.net/produtos-portfolio');

let db = mongoose.connection
module.exports = db