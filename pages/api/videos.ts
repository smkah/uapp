import * as yt from 'youtube-search-without-api-key';
import runMiddleware from './_middleware';
import type { NextApiRequest, NextApiResponse } from 'next'
import cors from 'cors';

export default async function videos(req: NextApiRequest | any, res: NextApiResponse | any) {

  await runMiddleware(req, res, cors)

  const { searchQuery } = req.body

  const videos = await yt.search(searchQuery);

  res.status(200).json(videos)
}
