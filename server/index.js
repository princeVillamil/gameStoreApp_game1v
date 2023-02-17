// need to fix front end before going on
// need to add db


const express = require('express')
const app = express()
const logger = require('morgan')


app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



let PORT = 5000
app.listen(PORT, ()=>{
  console.log(`Server is running in port: ${PORT}`)
})