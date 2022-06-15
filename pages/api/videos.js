import * as yt from 'youtube-search-without-api-key';

import Cors from 'cors'
import initMiddleware from '../../libs/middleware'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST'],
  })
)

export default async function videos(req, res) {

  await cors(req, res)

  const { searchQuery } = req.body

  const videos = await yt.search(searchQuery);

  res.status(200).json(videos)
}
