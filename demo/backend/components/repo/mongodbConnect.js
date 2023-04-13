const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'Bookstore'

let dbConnection = {}

async function dbConnect () {
  let result = await client.connect()
  dbConnection.db = result.db(dbName)
  return dbConnection
}
module.exports = { dbConnect, dbConnection }
