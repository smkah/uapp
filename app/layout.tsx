import "../styles/globals.css";
import { Mochiy_Pop_One } from "next/font/google";

const font = Mochiy_Pop_One({
  variable: "--custom-font",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "uApp",
  description: "Videos without ads",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.variable}>
      <body>{children} </body>
    </html>
  );
}
