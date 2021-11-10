const express = require('express');
const app  = express();

app.get('/',(req,res)=>{
    res.send("hello from api");
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})