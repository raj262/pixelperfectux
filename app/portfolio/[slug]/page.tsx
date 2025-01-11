import { portfolioData } from '@/lib/siteData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import GalleryWrapper from '@/components/GalleryWrapper';
import { getPortfolioProjectSEO } from '@/lib/seoData';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = portfolioData.projects.find(p => p.slug === params.slug);

    if (!project) {
        return {
            title: 'project Not Found',
        };
    }

    const seo = getPortfolioProjectSEO(params.slug, project.title, project.excerpt);

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        openGraph: {
            title: seo.title,
            description: seo.description,
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: seo.title,
            description: seo.description,
        },
    };
}

export default function PortfolioProject({ params }: { params: { slug: string } }) {
    const project = portfolioData.projects.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <GalleryWrapper>
            <div className="section-spacing">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-12 col-xl-8">
                            <h1 className="display-2 fw-medium">{project.title}</h1>
                            <p>{project.excerpt}</p>
                            <div className="d-inline-block dashed-box font-small font-family-secondary fw-medium uppercase mt-3">
                                <span>Client: {project.client}</span>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="bg-lighter border-radius p-4 p-md-5 box-shadow">
                                <div className="row g-3 g-md-4">
                                    <div className="col-12 col-md-6 col-xl-12">
                                        <h5 className="fw-medium mb-0">Services:</h5>
                                        <p>{project.category}</p>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-12">
                                        <h5 className="fw-medium mb-0">Project link:</h5>
                                        <a className="link-hover-line" href={project.projectLink.url}>{project.projectLink.label}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-spacing pt-0">
                <div className="container">
                    <div className="row g-4">
                        {project.images.map((image, index) => (
                            <div className="col-12 col-md-6" key={index}>
                                <div className="img-link-box border-radius">
                                    <a className="glightbox" href={image}>
                                        <Image src={image} alt={project.title} loading="lazy" width={600} height={400} data-gallery="gallery" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: project.content }} className="mt-4 mt-lg-5" />

                    {project.video && (
                        <div className="lightbox-video border-radius mt-4 mt-lg-5">
                            <Image src={project.video.thumbnail} alt={project.title} loading="lazy" width={1280} height={500} />
                            <a className="glightbox lightbox-play-btn" href={project.video.url} data-gallery="video">
                                <i className="bi bi-play"></i>
                            </a>
                        </div>
                    )}
                    <div className="mt-4 mt-lg-5">
                        <div dangerouslySetInnerHTML={{ __html: project.content2 }} />
                    </div>
                </div>
            </div>
        </GalleryWrapper>
    );
}
