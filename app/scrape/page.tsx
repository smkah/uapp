import jsdom from "jsdom";

export default async function Scrape() {
  const yt = await fetch("https://uapp.vercel.app/");
  console.log(yt);

  // const { JSDOM } = jsdom;
  // const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
  // console.log(dom.window.document.querySelector("p").textContent || "");

  return "Hello ";
}
