import mongoose from "mongoose";
const mongouri = "mongodb+srv://ashfaq:ashfaq123@ecommerce.uuipqog.mongodb.net/"

// export async function connect() {
//   try {
//     mongoose.connect(mongouri, {
//       // NewUrlParser: true,
//       // useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 40000, // Increase the timeout
//     });

//     mongoose.connection.on("connected", () => {
//       console.log("MongoDB connected");
//     });

//     mongoose.connection.on("error", (err)=>{
//         console.log("MongoDB error"+ err)
//     })
//   } catch (error: any) {
//     console.log(error);
//   }
// }


const connect = async()=>{
try {
        const connectionInstance = await mongoose.connect(mongouri);
        console.log(`Connected to mongodb successfully: ${connectionInstance?.connection.name} Database` )
} catch (error) {
    console.log("MongoDB Connection Error", error)
    process.exit(1)
}}
export default connect