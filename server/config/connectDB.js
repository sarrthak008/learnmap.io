import mongoose from "mongoose"

const connectToDB = async () => {
    try {

        let conn = await mongoose.connect(process.env.MONGO_URI);
        if (conn) {
            console.log(`database connected sucessfully.`)
        } else {
            console.log("database not connected");
        }

    } catch (error) {
        console.log(`db error ${error}`)
    }
}


export default connectToDB;