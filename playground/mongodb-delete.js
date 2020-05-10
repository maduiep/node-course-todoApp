//const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
 if (err) {
  return console.log('Unable to connect to MongoDB server')
 }
 console.log('Connected to MongoDB server')
 const db = client.db('TodoApp')

 // Delete for Todos
 // deleteMany
 db.collection('Todos').deleteMany({ text: 'Eaten Sunday Today' }).then((result) => {
  console.log(result)
 })
 // deleteOne
 db.collection('Todos').deleteOne({ text: 'Something to do' }).then((result) => {
  console.log(result)
 })

 // findOneAndDelete
 db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  console.log(result)
 })

 // Delete for Users
 // deleteMany
 db.collection('Users').deleteMany({ name: 'Justa Nwonu' }).then((results) => {
  console.log(results)
 })
 // deleteOne
 db.collection('Users').deleteOne({ name: 'Paschal Nwankwo' }).then((results) => {
  console.log(JSON.stringify(results, undefined, 2))
 })

 // findOneAndDelete
 db.collection('users').findOneAndDelete({
  _id: new ObjectID("5eb7fcf8b3bd2e1044e1ee2d")
 }).then((results) => {
  console.log(JSON.stringify(results, undefined, 2))
 })

 //client.close()
})