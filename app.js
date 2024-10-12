import express from 'express'
import fs from 'fs'

const app = express()

app.use(express.static('public'));

app.get('/', (req,res) => {
    fs.readFile('./public/index.html', (err,data) => {
        res.write(data)
    })
})

app.get('/about', (req,res) => {
    fs.readFile('./public/about.html', (err,data) => {
        res.write(data)
    })
})



app.post('/', (req, res) => {
    console.log('bro you cant do that')
})


const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`My first express app! Listening on ${PORT}`)
    
})