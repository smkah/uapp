import * as yt from 'youtube-search-without-api-key';
import Cors from 'cors'
import { NextRequest, NextResponse } from 'next/server';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextRequest, res: NextResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function videos(req: NextRequest | any, res: NextResponse | any) {

  await runMiddleware(req, res, cors)

  const { searchQuery } = req.body

  const videos = await yt.search(searchQuery);

  res.status(200).json(videos)
}
