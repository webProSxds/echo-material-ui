
import "../../assets/css/dashboard.css";
const DashBoardAdvisorPage = ()=>{
    
    return <><div className="container">
        <div className="profile-header p-4 mb-4">
            <div className="row align-items-center">
                <div className="col-md-12 text-center text-md-start">
                    <h2 className="mb-1">Welcome, Viren Sree!</h2>
                    <p>Here's what's happening with your account today</p>
                </div>

            </div>
        </div>

        <div className="row mb-4 top-cards">
            <div className="col-md-4 mb-3 mb-md-0">
                <div className="dashboard-card one">
                    <div className="stat-number">12</div>
                    <div className="stat-label">Active Advisor</div>
                    <div className="mt-3">
                        <a href="#" className="text-primary-custom text-decoration-none small">View all <i
                                className="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
                <div className="dashboard-card two ">
                    <div className="stat-number">8</div>
                    <div className="stat-label">Job Requirements</div>
                    <div className="mt-3">
                        <a href="#" className="text-primary-custom text-decoration-none small">View all <i
                                className="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="dashboard-card">
                    <div className="stat-number three">5</div>
                    <div className="stat-label">Interview Slots</div>
                    <div className="mt-3">
                        <a href="#" className="text-primary-custom text-decoration-none small">View all <i
                                className="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
            </div>
        </div>


        <div className="row">
            <div className="col-lg-4">
                <div className="dashboard-card">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="section-title mb-0">Recent Activity</h4>
                        <a href="#" className="text-primary-custom text-decoration-none small">View all</a>
                    </div>

                    <div className="activity-item">
                        <h6 className="mb-1">Requirement #12</h6>
                        <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="activity-time"><i className="far fa-clock me-1"></i> 1 hour ago</p>
                    </div>

                    <div className="activity-item">
                        <h6 className="mb-1">New Connection</h6>
                        <p className="mb-1">You connected with Binita Sharma</p>
                        <p className="activity-time"><i className="far fa-clock me-1"></i> 3 hours ago</p>
                    </div>

                    <div className="activity-item">
                        <h6 className="mb-1">Job Posted</h6>
                        <p className="mb-1">Frontend Developer position is now live</p>
                        <p className="activity-time"><i className="far fa-clock me-1"></i> 1 day ago</p>
                    </div>

                    <div className="activity-item">
                        <h6 className="mb-1">Interview Scheduled</h6>
                        <p className="mb-1">With Aman Agarwal for tomorrow at 2:00 PM</p>
                        <p className="activity-time"><i className="far fa-clock me-1"></i> 2 days ago</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 mb-4">
                <div className="card  mb-4">
                    <div className="card-body deli">
                        <div className="heading">
                            <h4 className="section-title">Connected Advisor</h4>
                        </div>
                        <div className="delegator-card">
                            <div className="row align-items-center">
                                <div className="col-md-2 text-center mb-3 mb-md-0">
                                    <img src="img/img2.png" alt="Profile" className="rounded-circle" width="70" height="70" />
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
                                    <img src="img/img3.png" alt="Profile" className="rounded-circle" width="70" height="70" />
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
                                    <img src="img/img3.png" alt="Profile" className="rounded-circle" width="70" height="70" />
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
                            <h4 className="section-title">Suggested Advisor</h4>
                        </div>
                        <div className="delegator-card">
                            <div className="row align-items-center">
                                <div className="col-md-2 text-center mb-3 mb-md-0">
                                    <img src="img/img2.png" alt="Profile" className="rounded-circle" width="70" height="70" />
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
                                    <img src="img/img3.png" alt="Profile" className="rounded-circle" width="70" height="70"/>
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

                        <div className="delegator-card">
                            <div className="row align-items-center">
                                <div className="col-md-2 text-center mb-3 mb-md-0">
                                    <img src="img/img3.png" alt="Profile" className="rounded-circle" width="70" height="70" />
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
            </div>


        </div>
    </div></>
}
export default DashBoardAdvisorPage;
