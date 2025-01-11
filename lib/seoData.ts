interface SEOMetadata {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
}

interface PageSEO {
    [key: string]: SEOMetadata;
}

const siteUrl = 'http://localhost:3000';

export const seoData: PageSEO = {
    home: {
        title: 'Nemu - Personal vCard/Portfolio Template',
        description: 'Personal vCard/Portfolio Template',
        keywords: ['home', 'welcome', 'main'],
        canonicalUrl: siteUrl,
    },
    contact: {
        title: 'Contact Us | Nemu',
        description: 'Get in touch with us for inquiries or support.',
        keywords: ['contact', 'support', 'inquiries'],
        canonicalUrl: `${siteUrl}/contact`,
    },
    blog: {
        title: 'Blog | Nemu',
        description: 'Read our latest articles and stay updated with our blog.',
        keywords: ['blog', 'articles', 'news'],
        canonicalUrl: `${siteUrl}/blog`,
    },
    portfolio: {
        title: 'Portfolio | Nemu',
        description: 'Explore our portfolio of projects and works.',
        keywords: ['portfolio', 'projects', 'works'],
        canonicalUrl: `${siteUrl}/portfolio`,
    },
};

export const getPortfolioProjectSEO = (id: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Portfolio | Nemu`,
    description: excerpt,
    keywords: ['portfolio', 'project', title.toLowerCase()],
    canonicalUrl: `${siteUrl}/portfolio/${id}`,
});

export const getBlogPostSEO = (slug: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Blog | Nemu`,
    description: excerpt,
    keywords: ['blog', 'article', ...title.toLowerCase().split(' ')],
    canonicalUrl: `${siteUrl}/blog/${slug}`,
});