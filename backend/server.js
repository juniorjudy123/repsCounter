require("dotenv").config()

const express = require("express")
const workoutRoutes = require("./routes/workout")
const mongoose = require("mongoose")

const app = express()

// middleware
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})
app.use(express.json())


// routes
app.use("/api/workouts", workoutRoutes)

//connecting to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		//listening to port
		app.listen(process.env.PORT, function () {
			console.log("connected to db & listening to port", process.env.PORT)
		})
	})
	.catch((error) => {
		console.log("error")
	})
/*listening to port 
app.listen(process.env.PORT, function () {
	console.log("listening to port", process.env.PORT)*/
