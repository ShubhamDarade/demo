const path = require('path')
const express = require('express')
const app = express()
const port = 80

const staticpath = path.join(__dirname, '../public')
const templatepath = path.join(__dirname, '../templates')

app.set('view engine', 'hbs')
app.set('views', templatepath)

// app.use(express.static(staticpath))

app.get('/', (req, res) => {
    res.render('index.hbs', {
        channelname : 'shubham'
    })
})

app.get('/about', (req,res) => {
    res.render('about.hbs')
})

app.get('/', (req,res) => {
    res.send('welcome to my Home page')
})

app.get('/about', (req,res) => {
    res.send('welcome to my About page')
})

app.get('/contact', (req,res) => {
    res.send('welcome to my contact page')
})

app.get('/contact/*', (req, res) => {
    res.render('404.hbs', {
        errorcomment : `oops this contact page coundn't be found`
    })
})

app.get('/about/*', (req, res) => {
    res.render('404.hbs', {
        errorcomment : `oops this about page coundn't be found`
    })
})

app.get('*', (req, res) => {
    res.render('404.hbs', {
        errorcomment : `oops page coundn't be found`
    })
})

app.listen(port, () => {
    console.log(`listning to the port ${port}`);
})