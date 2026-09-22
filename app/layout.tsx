import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { cn } from "cn";

import "./globals.css";

const inter = Inter_Tight({
    display: "swap",
    variable: "--font-inter-tight",

    subsets: ["latin"],
    fallback: ["sans-serif"],
    weight: ["400", "500", "600", "700"]
});

const mono = JetBrains_Mono({
    display: "swap",
    variable: "--font-jet-brains-mono",

    subsets: ["latin"],
    weight: ["400", "500"]
});

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={cn(inter.variable, mono.variable, "h-full antialiased")}>
            <body className="flex min-h-full flex-col">{children}</body>
        </html>
    );
}
