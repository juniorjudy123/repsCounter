const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ mssg: 'Get all workouts' })
})

//get a single workout 
router.get('/:id', (req, res) => {
    res.json({ mssg: 'Get a single workout' })
})
//post a new workout

router.post('/', async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const workout = await workout.create({ title, load, reps })
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
})
//delete a workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'delete a workout' })
})

//update a workout 
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'update a workout' })
})

module.exports = router
