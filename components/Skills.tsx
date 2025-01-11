import { skillsData } from '@/lib/siteData';

export default function Skills() {
    return (
        <section className="section-spacing pb-0">
            <div className="container">
                <div className="row g-4">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="col-12 col-lg-4">
                            <div className="progress-box">
                                <h6 className="font-small uppercase fw-medium">{skill.name}</h6>
                                <div className="animated-progress">
                                    <div data-progress={skill.progress} className="progress-show" style={{ width: `${skill.progress}%` }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}