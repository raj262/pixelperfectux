import { seoData } from "@/lib/seoData";
import { blogData } from "@/lib/siteData";
import { truncateText } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: seoData.blog.title,
    description: seoData.blog.description,
    openGraph: {
        title: seoData.blog.title,
        description: seoData.blog.description,
    },
    keywords: seoData.blog.keywords,
};

export default function BlogPage() {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row g-4 g-lg-5">
                    {blogData.map(post => (
                        <div className="col-12 col-lg-6" key={post.slug}>
                            <div className="blog-post-box">
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="blog-img">
                                        <Image src={post.thumbnail} alt={post.title} loading="lazy" width={660} height={330} />
                                    </div>
                                    <div className="blog-category">
                                        {post.category}
                                    </div>
                                </Link>
                                <div className="px-4 pt-4">
                                    <h2 className="d-inline-block fw-medium">
                                        <Link href={`/blog/${post.slug}`} className="link-hover-line">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p>{truncateText(post.excerpt, 130)}</p>
                                    <div className="font-small fst-italic text-lighter-50 mt-2">
                                        Posted on {post.date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
