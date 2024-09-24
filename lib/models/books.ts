import { model,models,Schema } from "mongoose";


const bookSchema = new Schema({
    title:{type:'string', required:true,unique:true},
    author:{type:'string', required:true},
    genre:{type:'string', required:true},
    user:{type:Schema.Types.ObjectId, ref:'User'}
},
{
    timestamps:true
}
);


const Book = models.Book || model('Book', bookSchema)

export default Book;