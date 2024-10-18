import mongoose from 'mongoose';

const Connection = async () => {
    mongoose.connect('mongodb://localhost:27017/blogsw');
    var db=mongoose.connection;
    db.on('error', console.log.bind(console, 'connection error'));
    db.once('open', function(callback){
     console.log('connection succeeded');
    })
};

export default Connection;