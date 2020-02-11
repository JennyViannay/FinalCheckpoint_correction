const express = require("express")
const connection = require('../../config/config')
const router = express.Router()


// ENTRY POINT :
router.get('/', (req, res) => {
    res.send("Route = /routes_for_user").status(200)
})

// Get All
router.get('/all', (req, res)=> {
    connection.query('SELECT * FROM representation', (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la récupération de la liste des users !!`)
        } else {
            res.status(200).send(results)
        }
    })
})

module.exports = router
