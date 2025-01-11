import { blogData } from '@/lib/siteData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import GalleryWrapper from '@/components/GalleryWrapper';
import { getBlogPostSEO } from '@/lib/seoData';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = blogData.find(p => p.slug === params.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    const seo = getBlogPostSEO(params.slug, post.title, post.excerpt);

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        openGraph: {
            title: seo.title,
            description: seo.description,
            type: 'article',
            authors: [post.author.label],
        },
        twitter: {
            card: 'summary_large_image',
            title: seo.title,
            description: seo.description,
        },
    };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = blogData.find(p => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <GalleryWrapper>
            <div className="section-spacing">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-12 col-xl-8">
                            <div className="d-inline-block dashed-box font-small text-lighter-60 fst-italic mb-2">
                                <span>Posted on: {post.date}</span>
                            </div>
                            <h1 className="display-2 fw-medium">{post.title}</h1>
                            <p>{post.excerpt}</p>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="bg-lighter border-radius p-4 p-md-5 box-shadow">
                                <div className="row g-3 g-md-4">
                                    <div className="col-12 col-md-6 col-xl-12">
                                        <h5 className="fw-medium mb-0">Category:</h5>
                                        <p>{post.category}</p>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-12">
                                        <h5 className="fw-medium mb-0">Posted by:</h5>
                                        <a className="link-hover-line" href={post.author.url}>{post.author.label}</a>
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
                        {post.images.map((image, index) => (
                            <div className="col-12 col-md-6" key={index}>
                                <div className="img-link-box border-radius">
                                    <a className="glightbox" href={image}>
                                        <Image src={image} alt={post.title} loading="lazy" width={600} height={400} data-gallery="gallery" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} className="mt-4 mt-lg-5" />

                    {post.video && (
                        <div className="lightbox-video border-radius mt-4 mt-lg-5">
                            <Image src={post.video.thumbnail} alt={post.title} loading="lazy" width={1280} height={500} />
                            <a className="glightbox lightbox-play-btn" href={post.video.url} data-gallery="video">
                                <i className="bi bi-play"></i>
                            </a>
                        </div>
                    )}
                    <div className="mt-4 mt-lg-5">
                        <div dangerouslySetInnerHTML={{ __html: post.content2 }} />
                    </div>
                </div>
            </div>
        </GalleryWrapper>
    );
}
