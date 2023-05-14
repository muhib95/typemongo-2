
import mongoose from "mongoose"
import app from "./app";

const port = 5000

// database connection

function dbConnection(){
  try {
    
    mongoose.connect('mongodb://127.0.0.1:27017/user');
    console.log('connected');
  } catch (error) {
    console.log(error);
    
  }

}


dbConnection();




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})