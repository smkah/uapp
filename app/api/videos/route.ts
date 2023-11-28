import * as yt from "youtube-search-without-api-key";
import { youtube } from "scrape-youtube";

import Cors from "cors";
import { initMiddleware } from "../../../libs/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { serverHooks } from "next/dist/server/app-render/entry-base";
import axios from "axios";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST"],
  })
);
export const dynamic = "force-dynamic";
export async function POST(req: NextRequest, res: NextResponse) {
  // await cors(req, res);

  const { searchQuery } = await req.json();

  try {
    const videos = await youtube.search(searchQuery, { type: "video" });
    return Response.json({ videos });
  } catch (error) {
    throw error;
  }
  // const videos = await yt.search(searchQuery);
}
