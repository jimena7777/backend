const mongoose= require('mongoose');

const connetDB = async () => {
    const conn=await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
};  	

module.exports=connetDB;