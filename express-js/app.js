import express from 'express';

const app = express();

const PORT = 3000;

app.get('/',(req,res)=>{return res.send(`<h1 style='font-size:150px;'>Hello World!</h1>`)});

app.listen(PORT, ()=>{console.log(`Server is running at port ${PORT}`);});
