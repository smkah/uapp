import * as yt from 'youtube-search-without-api-key';
import type { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import runMiddleware from './_middleware';
import cors from 'cors';

export default async function videos(req: NextRequest | any, res: NextResponse | any) {

  await runMiddleware(req, res, cors)

  const { searchQuery } = req.body

  const videos = await yt.search(searchQuery);

  res.status(200).json(videos)
}
