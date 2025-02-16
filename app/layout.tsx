import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const firaCode = Fira_Code({
    variable: "--font-fira-code",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Hermann Richy | Software Engineer",
    description:
        "Développeur web fullstack, formateur, CEO & Lead Developer à Digital Innovation.",
    openGraph: {
        images: "/images/hero.png",
    },
    icons: {
        icon: "/images/hero-img3.jpeg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${outfit.variable} ${firaCode.variable} h-full`}
        >
            <body
                className={`${outfit.className} h-full bg-background text-foreground`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
