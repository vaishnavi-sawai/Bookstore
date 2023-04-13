const express = require('express')
const app = express()
const mongodb = require('mongodb')
const joinDB = require('./join')
const cors = require('cors')
const { dbConnect, dbConnection } = require('./repo/mongodbConnect')
const Books = require('./repo/booksCollections')

app.use(
  cors({
    origin: 'http://localhost:3000'
  })
)

app.use(express.json()) //so that we dont have to parse the body

app.post('/create', async (req, res) => {
  let data = await Books()
  data = await data.insertOne(req.body)
  res.send(req.body)
})

app.put('/update', async (req, res) => {
  let data = await Books()
  console.log(req.body)
  console.log(req.body.name)
  let { name, price, pages, tags } = req.body
  data = await data.updateOne(
    { name: req.body.name },
    {
      $set: {
        name,
        price,
        pages,
        tags
      }
    }
  )

  res.send(data)
})

app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id
  console.log({ id })
  let data = await Books()
  data = await data.deleteOne({ _id: new mongodb.ObjectId(id) })
  console.log({ data })
})

app.get('/get', async (req, res) => {
  let result = await joinDB()
  res.send(result)
  console.log('hi')
})

app.listen(5001, async () => {
  await dbConnect()

  console.log('We are connected to Mongodb!')
})
