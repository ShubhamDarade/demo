const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req,res) => {
//     res.send('welcome to my Home page')
// })

// app.get('/', (req,res) => {
//     res.send('<h1>welcome to my Home page</h1>')
// })

app.get('/', (req,res) => {
    res.write('<h1>welcome to my Home page</h1>') // if u want to send multiple html responce use write
    res.write('<h1>welcome again to my Home page</h1>')
    res.send()  // localhost is still running thinking more data is coming to stop it use res.send()
})

app.get('/about', (req,res) => {
    res.send('welcome to my About page')
})

app.get('/contact', (req,res) => {
    res.send('welcome to my contact page')
})

app.get('/temp', (req,res) => {
    res.send('welcome to my Temp page')
})

app.listen(port, () => {
    console.log(`listning to the port ${port}`);
})

