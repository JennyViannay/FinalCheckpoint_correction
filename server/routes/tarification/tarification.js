const express = require("express")
const connection = require('../../config/config')
const router = express.Router()

// ENTRY POINT :
router.get('/', (req, res) => {
    res.send("Route = /tarification").status(200)
})

// Get All
router.get('/all', (req, res)=> {
    connection.query('SELECT * FROM tarification', (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la récupération de la liste des tarifs !!`)
        } else {
            res.status(200).send(results)
        }
    })
})

module.exports = router