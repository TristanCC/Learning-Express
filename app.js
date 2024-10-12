import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req,res) => {

    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})



app.post('/', (req, res) => {
    console.log('bro you cant do that')
})


const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`My first express app! Listening on ${PORT}`)
    
})