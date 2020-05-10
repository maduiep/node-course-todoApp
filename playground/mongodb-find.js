//const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
 if (err) {
  return console.log('Unable to connect to MongoDB server')
 }
 console.log('Connected to MongoDB server')
 const db = client.db('TodoApp')

 db.collection('Users').find().count().then((count) => {
  // console.log('Users')
  // console.log(JSON.stringify(docs, undefined, 2))
  console.log(`Users count: ${count}`)
 }, (err) => {
  console.log('Unable to fetch todos', err)
 })
 //client.close()
})