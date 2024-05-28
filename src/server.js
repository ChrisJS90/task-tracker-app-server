//Include the express library
// const express = require("express")
import express from 'express'
//Include the morgan middleware
// const morgan = require("morgan")
import morgan from 'morgan'
//Include the cors middleware
// const cors = require("cors")
import cors from 'cors'

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())
//Tell express to parse JSON in the request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export default app