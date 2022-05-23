const mongoose = require('mongoose')


const connectDB = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.DB_CLUSTER , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser:true
  }).then(() => {
    console.log("Database connected successfully ")
  }).catch(err => console.log(err))
}


module.exports = connectDB;
