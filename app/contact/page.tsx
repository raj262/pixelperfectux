import Contact from '@/components/Contact';
import Map from '@/components/Map';
import { seoData } from '@/lib/seoData';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: seoData.contact.title,
    description: seoData.contact.description,
    openGraph: {
        title: seoData.contact.title,
        description: seoData.contact.description,
    },
    keywords: seoData.contact.keywords,
};

export default function ContactPage() {
    return (
        <section className="section-spacing">
            <div className="container">
                <Contact />
                <Map />
            </div>
        </section>
    )
}