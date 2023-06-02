const db = require('../database/astronaut.db.js')

getAstronauts = async (req, res) => {
    try {
        const result = await db.all(`SELECT * FROM astronauts`)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

addAstronaut = async (req, res) => {
    try {
        const name = req.body.name;
        await db.run(`INSERT INTO astronauts (name) VALUES ('${name}')`);
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

updateAstronaut = async (req, res) => {
    try {
        const id = req.params.id
        const newName = req.body.newName
        await db.run(`UPDATE astronauts SET name='${newName}' WHERE id='${id}'`)
        res.status(204).send()
    } catch (error) {
        res.status(500).json(error)
    }
}

deleteAstronaut = async (req, res) => {
    try {
        const id = req.params.id
        await db.run(`DELETE FROM astronauts WHERE id='${id}'`)
        res.status(204).send()
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getAstronauts, addAstronaut, updateAstronaut, deleteAstronaut }