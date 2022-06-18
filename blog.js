const express = require('express')
const path = require('path')
const app = express()


app.set('viewengine', 'ejs')
app.set('public', path.join(__dirname, 'public'))
app.use('/css', express.static(path.resolve(__dirname, 'public/css')))
app.use('/js', express.static(path.resolve(__dirname, 'public/js')))

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.listen(3000)