import { Geist, Inter, JetBrains_Mono } from "next/font/google";


export const geist = Geist(
    {
        variable: "--font-geist",
        subsets: ["latin"],
    }
)

export const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

export const jetbrains = JetBrains_Mono({
    variable: "--font-jetbrains",
    subsets: ["latin"],
})