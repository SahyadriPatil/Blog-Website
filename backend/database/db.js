import mongoose from "mongoose";

const Connection =  async(username,password)=>{
    const URL = `mongodb://${username}:${password}@ac-d31yumt-shard-00-00.hwxltbu.mongodb.net:27017,ac-d31yumt-shard-00-01.hwxltbu.mongodb.net:27017,ac-d31yumt-shard-00-02.hwxltbu.mongodb.net:27017/?ssl=true&replicaSet=atlas-g6e4gq-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
       await mongoose.connect(URL,{useNewUrlParser: true}); 
       console.log("database connected successfully");
    } catch (error) {
        console.log("error while connecting",error);
    }
}
export default Connection;