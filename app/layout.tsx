import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/theme.scss";
import "swiper/css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'glightbox/dist/css/glightbox.min.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGradient from "@/components/CursorGradient";
import { seoData } from "@/lib/seoData";

export const metadata: Metadata = {
    title: seoData.home.title,
    description: seoData.home.description,
    openGraph: {
        title: seoData.home.title,
        description: seoData.home.description,
    },
    keywords: seoData.home.keywords,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {/* Header */}
                <Header />

                {children}

                {/* Footer */}
                <Footer />

                {/* Cursor Gradient */}
                <CursorGradient />
            </body>
        </html>
    );
}
