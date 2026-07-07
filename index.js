import express from 'express';

const app = express();

const PORT = process.env.PORT ?? 8080;

app.get('/', (req,res) =>{
    return res.json({msg: 'hello from the server heyy guys'})
})

app.listen(PORT, () =>{
    console.log(`server is up and running on PORT 8080`)
})