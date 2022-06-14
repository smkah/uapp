import * as yt from 'youtube-search-without-api-key';
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function videos(req, res) {

  await runMiddleware(req, res, cors)

  const { searchQuery } = req.body

  const videos = await yt.search(searchQuery);

  res.status(200).json(videos)
}
