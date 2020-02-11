const express = require("express")
const connection = require('../../config/config')
const router = express.Router()


// ENTRY POINT :
router.get('/', (req, res) => {
    res.send("Route = /representation").status(200)
})

// Get One representation by Id
router.get('/:id', (req, res)=> {
    const id = req.params.id
    connection.query('SELECT * FROM representation WHERE id = ?', id, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send(`Erreur lors de la récupération de la liste des show pour cette représentation !!`)
        } else {
            res.status(200).send(results)
        }
    })
})

// Get All representations by tour_name
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

// Get All acts by representation_id
router.get('/act-by-representation/:id', (req, res)=> {
    const id = req.params.id
    connection.query('SELECT * FROM act INNER JOIN representation_act ON act.id = representation_act.act_id WHERE represention_id = ?', id, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send(`Erreur lors de la récupération de la liste des show pour cette représentation !!`)
        } else {
            res.status(200).send(results)
        }
    })
})


module.exports = router