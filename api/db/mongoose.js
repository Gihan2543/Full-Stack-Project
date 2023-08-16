const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://chamikarav:CHAMikara789@cluster0.nqkje1n.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
    console.log("connected to MongoDB successfuly :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);


module.exports = {
    mongoose
};
