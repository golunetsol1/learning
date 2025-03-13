import express from 'express';

const app = express();

const PORT = 3000;
// const PORT = process.env.PORT; // inside env process  $env:PORT=3000 in powershell or directlly using .env file

app.get('/',(req,res)=>{return res.send(`<h1 style='font-size:150px;'>Hello World!</h1>`)});

app.listen(PORT, ()=>{console.log(`Server is running at port ${PORT}`);});

// console.log(process);