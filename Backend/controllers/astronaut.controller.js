const db = require('../database/astronaut.db.js')

getAstronauts = async (req, res) => {
    await db.all(`SELECT * FROM astronauts`, function (err, result) {
        if (err) res.status(400).json(err)
        else res.status(200).json(result)
    })
}

addAstronaut = async (req, res) => {
    const name = req.body.name
    await db.run(`INSERT INTO astronauts (name) VALUES ('${name}')`, function (err, result) {
        if (err) res.status(400).json(err)
        else res.status(201).json(result)
    })
}

updateAstronaut = async (req, res) => {
    const id = req.params.id
    const newName = req.body.newName
    await db.run(`UPDATE astronauts SET name='${newName}' WHERE id='${id}'`, function (err, result) {
        if (err) res.status(400).json(err)
        else res.status(200).json(result)
    })
}

deleteAstronaut = async (req, res) => {
    const id = req.params.id
    await db.run(`DELETE FROM astronauts WHERE id='${id}'`, function (err, result) {
        if (err) res.status(400).json(err)
        else res.status(200).json(result)
    })
}

module.exports = { getAstronauts, addAstronaut, updateAstronaut, deleteAstronaut }