const { dbConnection } = require('./mongodbConnect')

async function collection () {
  // const db = await dbConnect();
  //   console.log(dbConnection)
  return dbConnection.db.collection('Books')
}

module.exports = collection
