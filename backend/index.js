import express, { request, response } from "express";
const app = express();
import { MangoDbUrl } from "./config.js";
import mongosee from "mongoose"
import bookRoute from "./routes/bookroute.js";
import cors from 'cors';
app.use(express.json());

app.use("/books" , bookRoute);
app.use(cors());


mongosee.connect(MangoDbUrl).then(
()=>{
    console.log("mango connicting right")
}
).catch(
    (error)=>{
        console.log(error)
    }
);

const Port = 5555;
app.listen(Port , ()=>{
    console.log("the server is running")
});