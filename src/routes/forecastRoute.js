const express = require('express')
const router = express.Router()
const controller = require('../controllers/forecastsController')

router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.post('/',controller.validateReq, controller.post)

router.patch('/:id',getSubscriber, (req, res) => {
    
})

router.delete('/:id',getSubscriber, (req, res) => {
    
})

async function getSubscriber(req, res, next) {
    try {
        subscriber = await Subscriber.findById(req.params.id)
        console.log(subscriber== null)
        if (subscriber == null) {
            return res.status(404).json({ message: 'subscriber not found' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.subscriber = subscriber
    next()
}

module.exports = router