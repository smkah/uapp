import * as yt from 'youtube-search-without-api-key';
import { youtube } from 'scrape-youtube';

import Cors from 'cors'
import initMiddleware from '../../libs/middleware'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST'],
  })
)

export default async function videos(req: any, res: any) {

  await cors(req, res)

  const { searchQuery } = req.body

  const videos = await youtube.search(searchQuery, { type: 'video' });

  // const videos = await yt.search(searchQuery);
  return res.status(200).json(videos)

}
