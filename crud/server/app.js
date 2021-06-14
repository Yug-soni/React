const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2393',
    database: 'CRUDataBase'
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Site working.')
})

app.get('/api/get', (req, res) => {
    const sqlScript = `SELECT * FROM CRUDataBase.movie_reviews`;

    db.query(sqlScript, (err, result) => {
        res.send(result)
    })
})

app.post('/api/insert', (req, res) => {
    console.log('Going in post request')
    const movie_name = req.body.movieName
    const movie_review = req.body.movieReview

    const sqlScript = `INSERT INTO CRUDataBase.movie_reviews (movie_name, movie_review) VALUES ('${movie_name}', '${movie_review}')`
    db.query(sqlScript, (err, result) => {
        res.send('Data inserted.');
    })
})

app.post('/api/delete', (req, res) => {
    console.log('Deletion started.')

    const name = req.body.name
    const review = req.body.review

    const sqlScript = `DELETE FROM CRUDataBase.movie_reviews WHERE movie_name = '${name}' AND movie_review = '${review}' `
    db.query(sqlScript, (err, result) => {
        console.log(err)
        console.log(result)
        res.send('Row deleted')
    })
})

app.post('/api/update', (req, res) => {
    console.log('Update started.')
    const id = req.body.id
    const review = req.body.review

    if(review.length == 0 || review == undefined || review == null) {
        res.send("No changed in review")
    }

    const sqlScript = `UPDATE CRUDataBase.movie_reviews SET movie_review = '${review}' WHERE id = ${id};`
    console.log(sqlScript)
    db.query(sqlScript, (err, result) => {
        if(err) {
            console.log(error)
            res.send("error")
        }
        console.log(result)
        res.send('Row updated')
    })
})

app.listen(3001, () => {
    console.log("Server started.");
})