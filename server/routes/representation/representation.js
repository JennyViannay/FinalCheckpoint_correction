const express = require("express")
const connection = require('../../config/config')
const router = express.Router()


// ENTRY POINT :
router.get('/', (req, res) => {
    res.send("Route = /representation").status(200)
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

// Get All by Tour_name
router.get('/all-by-tour/:name', (req, res)=> {
    const name = req.params.name
    connection.query('SELECT * FROM representation WHERE tour_name = ?', name, (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la récupération de la liste des représentation de cette tournée !!`)
        } else {
            res.status(200).send(results)
        }
    })
})

// Get All by Tour_name
router.get('/act-by-representation/:id', (req, res)=> {
    const id = req.params.id
    connection.query('SELECT * FROM representation_act WHERE represention_id = ?', id, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send(`Erreur lors de la récupération de la liste des show pour cette représentation !!`)
        } else {
            res.status(200).send(results)
        }
    })
})

module.exports = router
