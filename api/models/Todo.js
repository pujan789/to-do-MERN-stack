import mongoose, { Mongoose } from 'mongoose';

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text:{
        type:String,
        required:true
    },
    complete:{
        type: Boolean,
        default: false
    },
    priority:{
        type:Number,
        required:true
    },
    timestamp:{
        type: String,
        default: Date.now()
    }
})

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;
