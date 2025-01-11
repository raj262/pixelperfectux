import { resumeData } from '@/lib/siteData';

export default function Resume() {
    return (
        <section id="resume" className="section-spacing pb-0">
            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-xxl-8">
                        {resumeData.experience.map((job, index) => (
                            <div key={index} className="row g-2 g-lg-4 mt-3 mt-lg-1">
                                <div className="col-12 col-lg-3 text-lg-end">
                                    <div className="dashed-box font-small font-family-secondary fw-medium uppercase">
                                        {job.period}
                                    </div>
                                </div>
                                <div className="col-12 col-lg-9">
                                    <h4>{job.title} <span className="fst-italic fw-medium text-lighter-30">@{job.company}</span></h4>
                                    <p>{job.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 col-xxl-4">
                        <div className="row g-4">
                            {resumeData.education.map((edu, index) => (
                                <div key={index} className="col-12 col-lg-6 col-xxl-12">
                                    <div className="bg-theme-secondary border-radius box-shadow p-4 p-md-5 icon-3xl">
                                        <i className={` ${edu.icon} text-white-50`}></i>
                                        <div className="mt-3 mt-lg-4">
                                            <h5 className="fw-medium mb-1">{edu.degree}</h5>
                                            <p>{edu.institution}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}