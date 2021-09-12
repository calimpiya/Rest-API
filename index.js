import express from 'express';
import bodyParser from 'body-parser';
import userrouter from './router/users.js';
const app= express();
const PORT= 5000;
app.use(bodyParser.json());
app.use('/users', userrouter);
app.get('/', (req,res)=> res.send("hello from homepage"));
app.listen(5000, ()=> console.log(`server running on port :http://localhost : ${PORT}`));




