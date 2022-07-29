import * as yt from 'youtube-search-without-api-key';

import Cors from 'cors'
import initMiddleware from '../../libs/middleware'
import puppeteer from 'puppeteer'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST'],
  })
)

export default async function videos(req: any, res: any) {

  await cors(req, res)

  const { searchQuery } = req.body

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://www.youtube.com/results?search_query=${searchQuery}`);
  const videos1 = await page.$$('#meta');
  console.log(videos1)

  // await browser.close();
  const videos = await yt.search(searchQuery);
  return res.status(200).json(videos)



}
