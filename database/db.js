import mongoose from 'mongoose';


const Connection = async(username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@travelo.brxogoe.mongodb.net/?retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL, {useNewUrlParser: true}) //connect function takes two arguments one is the URL and another one is to save us from the error of old urlParser being deprecated
       //old URL parser is deprecated so we will use a new URL parser
       console.log("database connected successfully")
    }catch(error){
        console.log(`error while connecting to database ${error}`)
    }
}

export default Connection;