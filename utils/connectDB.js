const mongoose = require('mongoose');
const uri = 'mongodb+srv://dApproot:dApproot123456789@dapp.iehquv4.mongodb.net/?retryWrites=true&w=majority';
const connectDB = async () => {
    try{
        await mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true});
        console.log("MongoDB Connected")
    }
    catch (err) {
        console.error(err);
        process.exit(1)
    }
}

export default connectDB;