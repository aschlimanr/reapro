const express = require('express');

const port = 3333

const app = express()
app.use(express.static( `${__dirname}/dist` ) );



app.listen(port, ()=>{
    console.log(`Port ${port} is online`)
})