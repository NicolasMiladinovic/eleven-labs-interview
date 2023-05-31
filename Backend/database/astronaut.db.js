const sqlite3 = require('sqlite3')

const dbFile = './database/astronaut.db'

// Créer une nouvelle instance de base de données
const db = new sqlite3.Database(dbFile, err => {
    if (err) throw err
})

// Check if table astronauts already exists
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='astronauts'", (err, row) => {
    if (err) throw err
    
    if (!row) {
        // Create table astronauts
        db.run(`CREATE TABLE astronauts (
            id INTEGER PRIMARY KEY,
            name TEXT
        )`)

        // Insert default values
        db.run(`INSERT INTO astronauts (name) VALUES ('Neil Armstrong')`)
        db.run(`INSERT INTO astronauts (name) VALUES ('Buzz Aldrin')`)
        db.run(`INSERT INTO astronauts (name) VALUES ('Alan Shepard')`)

        console.log('Table astronauts created.')
    } else {
        console.log('Table astronauts already exists.')
    }
})

module.exports = { db }