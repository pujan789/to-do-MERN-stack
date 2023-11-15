import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import mongoose from 'mongoose';
import cors from "cors";
import Todo from "./models/Todo.js";

const app = express();
const port = 3001;

app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }));

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo").then(() => console.log("connected to db"))
.catch(console.error)



app.get("/todos",  async (req, res) => {
    const todos = await Todo.find();
    res.json(todos)
});

app.post("/todo/new",  (req,res) => {
  const todo = new Todo({
    text: req.body.text,
    priority: req.body.priority
  })

  todo.save();  

  res.json(todo)
})

app.delete("/todo/delete/:id", async (req,res) => {
  const result = await Todo.deleteOne({_id: req.params.id});
  res.json(result);
})


app.patch("/todo/complete/:id", async (req,res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();

  res.json(todo);
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




