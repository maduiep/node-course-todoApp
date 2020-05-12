const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

app.post('/todos', (req, res) => {
 var todo = new Todo({
  text: req.body.text
 })

 todo.save().then((doc) => {
  res.send(doc)
 }, (e) => {
  res.status(400).send(e)
 })
})
app.listen(port, () => console.log(`Server app listening on port ${port}`))

module.exports = {app }
