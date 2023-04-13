const collection = require('./repo/booksCollections')

const joinDB = async () => {
  let data = await collection()
  let result = await data
    .aggregate([
      {
        $lookup: {
          from: 'Genre',
          localField: 'tags',
          foreignField: 'genreName',
          as: 'Similar_Books'
        }
      }
    ])
    .toArray()
  return JSON.stringify(result, null, 2)
}
module.exports = joinDB
