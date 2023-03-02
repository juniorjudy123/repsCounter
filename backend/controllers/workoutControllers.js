const mongoose = require('mongoose')
const Workout = require('../models/workoutModel')//cut and paste from workout.js

//get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}


//get a workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.objectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({ error: 'No such workout' })
    }
    res.staus(200).json(workout)
}

// create new workout

const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body

    //add to the db
    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}
//delete a workout
const deleteWorkout = async (req, res) => {

}

// update a workout

const updateWorkout = async (req, res) => {

}

module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}
