import * as express from "express";

const app = express();
const server = app.listen(()=>{
    console.log('server started: ',server.address())
});