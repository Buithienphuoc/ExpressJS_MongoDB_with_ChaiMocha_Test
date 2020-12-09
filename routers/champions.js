// * Basic format of a router file *
// declare libraries
const express = require('express')
const router = express.Router()
const championSchema = require('../models/champion')

// routers:

// get all:
router.get('/', async(request,response) => { // async is not required but better have it :)
    try{
        const champions = await championSchema.find()
        await response.json(champions)
    }
    catch(error) {
        response.send("Error:"+ error)
    }
})

// get by id
router.get('/:id', async(request,response) => { // async is not required but better have it :)
    try{
        const champion = await championSchema.findById(request.params.id)
        await response.json(champion)
    }
    catch(error) {
        response.send("Error:"+ error)
    }
})

// add new
router.post('/', async(request,response) => {
    const champion = new championSchema({
        name: request.body.name,
        banPickQuote:request.body.banPickQuote,
        qSkill:request.body.qSkill,
        rSkill:request.body.rSkill,
    })
    try {
        const savedChampion = await champion.save()
        await response.json(savedChampion)
    }
    catch (error) {
        response.send("Cannot add champion")
    }
})

// update meta - change isMeta
router.patch('/:id', async(request,response) => { // async is not required but better have it :)
    try{
        const champion = await championSchema.findById(request.params.id)
        // fack u JS, "sub" means "sub status", I actually don't understand WTH is "sub" until someone told me
        champion.isMeta = request.body.isMeta
        const savedChampion = await champion.save()
        await response.json(savedChampion)
    }
    catch(error) {
        response.send("Error:"+ error)
    }
})


// export the modules:
module.exports = router