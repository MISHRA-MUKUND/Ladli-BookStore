import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
  id:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  title:{
    type:String,
    required:true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Free", "Paid"], // Ensures only "Free" or "Paid" is allowed
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensures price is not negative
  },
  description:String,
  image:String,
})
//creating models
const Book=mongoose.model("Book",bookSchema);
export default Book;