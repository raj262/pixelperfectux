import { servicesData } from '@/lib/siteData';

export default function Services() {
    return (
        <section id="services" className="section-spacing pb-0">
            <div className="container">
                <div className="row g-4 align-items-center">
                    {servicesData.map((service, index) => (
                        service.title && service.description ? (
                            <div key={index} className="col-12 col-xl-4 align-self-stretch">
                                <div className="bg-theme border-radius p-4 p-md-5 box-shadow h-100 d-flex align-items-center">
                                    <div>
                                        <div className="h1 display-2 font-family-tertiary fw-semi-bold stroke-text text-fade">
                                            {service.title}
                                        </div>
                                        <span className="text-white">
                                            {service.description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div key={index} className="col-12 col-lg-6 col-xl-4">
                                <div className="bg-lighter border-radius p-4 p-md-5 box-shadow position-relative">
                                    <div className="icon-4xl mb-3 mb-lg-4 mb-xl-5">
                                        <i className={`${service.icon} text-lighter-40`}></i>
                                    </div>
                                    <h5 className="fw-medium line-height-140">
                                        {service.title}
                                    </h5>
                                    <p>{service.description}</p>
                                    <a href={service.href} className="button-circle button-corner position-absolute end-0 bottom-0">
                                        <i className="bi bi-send"></i>
                                    </a>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}