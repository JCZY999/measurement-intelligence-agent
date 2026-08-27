import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
const display=Manrope({subsets:["latin"],variable:"--display"});
const body=DM_Sans({subsets:["latin"],variable:"--body"});
export const metadata:Metadata={title:"Stitch — Marketing Measurement Agent",description:"An AI agent that audits measurement, connects marketing to revenue, and recommends what to do next."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>}

