require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workouts")
//express app
const app = express()

//middleware
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})
app.use(express.json())


// routes
app.use("/api/workouts", workoutRoutes)



//connecting to db
mongoose.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('connected to database')
		//listening to port
		app.listen(process.env.PORT, () => {
			console.log(" listening for requests on port", process.env.PORT)
		})
	})
	.catch((error) => {
		console.log("error")
	})


