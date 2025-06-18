import '../../assets/css/search.css';
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";

const SearchDelegatorsPage = ()=>{
    
    return <><div className="container">
        <div className="profile-header p-4 mb-4">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                    <h2 className="mb-1">Search Delegators</h2>
                </div>
                <div className="col-md-6">
                    <div className="input-group search">
                        <input type="text" className="form-control" placeholder="Search by skill, location, or name" />
                        <button className="btn btn-primary-custom" type="button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-3 mb-4">
                <div className="filter-card">
                    <h4 className="section-title">Tech Stack</h4>
                    <div className="mb-3">
                        <h6 className="fw-bold mb-2">Programming Languages</h6>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="pythonCheck" checked/>
                            <label className="form-check-label" htmlFor="pythonCheck">Python</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="javaCheck"/>
                            <label className="form-check-label" htmlFor="javaCheck">Java</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="javascriptCheck"/>
                            <label className="form-check-label" htmlFor="javascriptCheck">JavaScript</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="sqlCheck"/>
                            <label className="form-check-label" htmlFor="sqlCheck">SQL</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <h6 className="fw-bold mb-2">Frameworks</h6>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="reactCheck"/>
                            <label className="form-check-label" htmlFor="reactCheck">React</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="nodeCheck"/>
                            <label className="form-check-label" htmlFor="nodeCheck">Node.js</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <h6 className="fw-bold mb-2">Cloud & DevOps</h6>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="awsCheck" checked/>
                            <label className="form-check-label" htmlFor="awsCheck">AWS</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="kubernetesCheck"/>
                            <label className="form-check-label" htmlFor="kubernetesCheck">Kubernetes</label>
                        </div>
                    </div>

                    <button className="btn btn-primary-custom">Apply Filters</button>
                    <button className="btn btn-outline-secondary">Reset</button>
                </div>
            </div>

            <div className="col-lg-9">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Showing 5 Delegators</h4>
                    <div className="dropdown">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="sortDropdown"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by: Relevance
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="sortDropdown">
                            <li><a className="dropdown-item" href="#">Relevance</a></li>
                            <li><a className="dropdown-item" href="#">Highest Rated</a></li>
                            <li><a className="dropdown-item" href="#">Most Experience</a></li>
                            <li><a className="dropdown-item" href="#">Newest First</a></li>
                        </ul>
                    </div>
                </div>

                <div className="card  mb-4">
                    <div className="card-body deli">
                        <div className="heading">
                            <h4 className="section-title">Connected Delegators</h4>
                        </div>
                        <div className="delegator-card">
                            <div className="row align-items-center">
                                <div className="col-md-2 text-center mb-3 mb-md-0">
                                    <img src={img2} alt="Profile" className="rounded-circle" width="70" height="70"/>
                                </div>
                                <div className="col-md-5">
                                    <h5 className="mb-1">Aman Agarwal</h5>
                                    <p className="text-muted small mb-2">Frontend Developer</p>
                                    <div className="d-flex flex-wrap">
                                        <span className="badge bg-light text-dark me-2 mb-1">React</span>
                                        <span className="badge bg-light text-dark me-2 mb-1">JavaScript</span>
                                        <span className="badge bg-light text-dark mb-1">CSS</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <p className="small text-muted mb-1"><i className="far fa-calendar-alt me-1"></i> Connected:
                                        Feb 2025</p>
                                    <p className="small text-muted mb-1"><i className="fab fa-whatsapp me-1"></i> +91 1234557809
                                    </p>
                                    <p className="small text-muted"><i className="fas fa-phone me-1"></i> +91 1234567809</p>
                                </div>
                                <div className="col-md-2 text-center text-md-end">
                                    <button className="btn btn-sm btn-outline-custom"> Email</button>
                                    <button className="btn btn-sm btn-outline-custom"> WhatsApp</button>
                                    <button className="btn btn-sm btn-outline-custom"> Message</button>
                                </div>
                            </div>
                        </div>

                        <div className="delegator-card">
                            <div className="row align-items-center">
                                <div className="col-md-2 text-center mb-3 mb-md-0">
                                    <img src={img3} alt="Profile" className="rounded-circle" width="70" height="70"/>
                                </div>
                                <div className="col-md-5">
                                    <h5 className="mb-1">Binita Sharma</h5>
                                    <p className="text-muted small mb-2">UX Researcher</p>
                                    <div className="d-flex flex-wrap">
                                        <span className="badge bg-light text-dark me-2 mb-1">User Testing</span>
                                        <span className="badge bg-light text-dark me-2 mb-1">Analytics</span>
                                        <span className="badge bg-light text-dark mb-1">Personas</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <p className="small text-muted mb-1"><i className="far fa-calendar-alt me-1"></i> Connected:
                                        Jan 2025</p>
                                    <p className="small text-muted mb-1"><i className="fab fa-whatsapp me-1"></i> +91 9876543210
                                    </p>
                                    <p className="small text-muted"><i className="fas fa-phone me-1"></i> +91 9876543210</p>
                                </div>
                                <div className="col-md-2 text-center text-md-end">
                                    <button className="btn btn-sm btn-outline-custom"> Email</button>
                                    <button className="btn btn-sm btn-outline-custom"> WhatsApp</button>
                                    <button className="btn btn-sm btn-outline-custom"> Message</button>
                                </div>
                            </div>
                        </div>
                        <div className="delegator-card">
                            <div className="row align-items-center">
                                <div className="col-md-2 text-center mb-3 mb-md-0">
                                    <img src={img3} alt="Profile" className="rounded-circle" width="70" height="70"/>
                                </div>
                                <div className="col-md-5">
                                    <h5 className="mb-1">Binita Sharma</h5>
                                    <p className="text-muted small mb-2">UX Researcher</p>
                                    <div className="d-flex flex-wrap">
                                        <span className="badge bg-light text-dark me-2 mb-1">User Testing</span>
                                        <span className="badge bg-light text-dark me-2 mb-1">Analytics</span>
                                        <span className="badge bg-light text-dark mb-1">Personas</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <p className="small text-muted mb-1"><i className="far fa-calendar-alt me-1"></i> Connected:
                                        Jan 2025</p>
                                    <p className="small text-muted mb-1"><i className="fab fa-whatsapp me-1"></i> +91 9876543210
                                    </p>
                                    <p className="small text-muted"><i className="fas fa-phone me-1"></i> +91 9876543210</p>
                                </div>
                                <div className="col-md-2 text-center text-md-end">
                                    <button className="btn btn-sm btn-outline-custom"> Email</button>
                                    <button className="btn btn-sm btn-outline-custom"> WhatsApp</button>
                                    <button className="btn btn-sm btn-outline-custom"> Message</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="card">
                    <div className="card-body deli">
                        <div className="heading">
                            <h4 className="section-title">Suggested Delegators</h4>
                        </div>
                        <div className="delegator-card">
                            <div className="row align-items-center">
                                <div className="col-md-2 text-center mb-3 mb-md-0">
                                    <img src={img2} alt="Profile" className="rounded-circle" width="70" height="70"/>
                                </div>
                                <div className="col-md-5">
                                    <h5 className="mb-1">Aman Agarwal</h5>
                                    <p className="text-muted small mb-2">Frontend Developer</p>
                                    <div className="d-flex flex-wrap">
                                        <span className="badge bg-light text-dark me-2 mb-1">React</span>
                                        <span className="badge bg-light text-dark me-2 mb-1">JavaScript</span>
                                        <span className="badge bg-light text-dark mb-1">CSS</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <p className="small text-muted mb-1"><i className="far fa-calendar-alt me-1"></i> Connected:
                                        Feb 2025</p>
                                    <p className="small text-muted mb-1"><i className="fab fa-whatsapp me-1"></i> +91 1234557809
                                    </p>
                                    <p className="small text-muted"><i className="fas fa-phone me-1"></i> +91 1234567809</p>
                                </div>
                                <div className="col-md-2 text-center text-md-end">
                                    <button className="btn btn-sm btn-outline-custom"> Connect</button>
                                    <button className="btn btn-sm btn-outline-custom"> Ignore</button>
                                </div>
                            </div>
                        </div>
                        <div className="delegator-card">
                            <div className="row align-items-center">
                                <div className="col-md-2 text-center mb-3 mb-md-0">
                                    <img src={img2} alt="Profile" className="rounded-circle" width="70" height="70"/>
                                </div>
                                <div className="col-md-5">
                                    <h5 className="mb-1">Aman Agarwal</h5>
                                    <p className="text-muted small mb-2">Frontend Developer</p>
                                    <div className="d-flex flex-wrap">
                                        <span className="badge bg-light text-dark me-2 mb-1">React</span>
                                        <span className="badge bg-light text-dark me-2 mb-1">JavaScript</span>
                                        <span className="badge bg-light text-dark mb-1">CSS</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <p className="small text-muted mb-1"><i className="far fa-calendar-alt me-1"></i> Connected:
                                        Feb 2025</p>
                                    <p className="small text-muted mb-1"><i className="fab fa-whatsapp me-1"></i> +91 1234557809
                                    </p>
                                    <p className="small text-muted"><i className="fas fa-phone me-1"></i> +91 1234567809</p>
                                </div>
                                <div className="col-md-2 text-center text-md-end">
                                    <button className="btn btn-sm btn-outline-custom"> Connect</button>
                                    <button className="btn btn-sm btn-outline-custom"> Ignore</button>
                                </div>
                            </div>
                        </div>

                        <div className="delegator-card">
                            <div className="row align-items-center">
                                <div className="col-md-2 text-center mb-3 mb-md-0">
                                    <img src={img3} alt="Profile" className="rounded-circle" width="70" height="70"/>
                                </div>
                                <div className="col-md-5">
                                    <h5 className="mb-1">Binita Sharma</h5>
                                    <p className="text-muted small mb-2">UX Researcher</p>
                                    <div className="d-flex flex-wrap">
                                        <span className="badge bg-light text-dark me-2 mb-1">User Testing</span>
                                        <span className="badge bg-light text-dark me-2 mb-1">Analytics</span>
                                        <span className="badge bg-light text-dark mb-1">Personas</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <p className="small text-muted mb-1"><i className="far fa-calendar-alt me-1"></i> Connected:
                                        Jan 2025</p>
                                    <p className="small text-muted mb-1"><i className="fab fa-whatsapp me-1"></i> +91 9876543210
                                    </p>
                                    <p className="small text-muted"><i className="fas fa-phone me-1"></i> +91 9876543210</p>
                                </div>
                                <div className="col-md-2 text-center text-md-end">
                                    <button className="btn btn-sm btn-outline-custom"> Connect</button>
                                    <button className="btn btn-sm btn-outline-custom"> Ignore</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    </div></>
}
export default SearchDelegatorsPage;
