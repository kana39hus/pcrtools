import express from 'express'
const { prisma } = require('../utils/db');
const router = express.Router();
var fs = require('fs')


router.post('/updateName', async (req, res) => {
    try {
        console.log(req.body);
        const character = await prisma.character.upsert({
            where: {
                nickname: req.body.nickname
            },
            update: {
                name: req.body.name,
            },
            create: {
                name: req.body.name,
                nickname: req.body.nickname
            }
        })
        console.log(character);
        res.json(character)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" })
    }


})

router.post('/getNameList', async (req, res) => {
    try {
        const characters = await prisma.character.findMany({
        })
        res.json(characters)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" })
    }


})



module.exports = router;