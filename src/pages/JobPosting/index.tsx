
import "../../assets/css/job-post.css";

const JobPostingPage = ()=>{
    
    return <><div className="container">
        <div className="profile-header p-4 mb-4">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                    <h2 className="mb-1">Search Delegators</h2>
                </div>
                <div className="col-md-6 btn-whitee">
                    <button className="btn btn-primary-custom text-md-center">
                         New Job Posting
                    </button>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <div className="d-flex justify-content-between align-items-center mb-4 fliters">
                    <div className="col-md-8 d-flex align-items-center">
                        <div className="me-3">
                            <label htmlFor="statusFilter" className="form-label mb-0">Filter:</label>
                            <select id="statusFilter" className="form-select form-select-sm">
                                <option selected>All Statuses</option>
                                <option>Open</option>
                                <option>Closed</option>
                                <option>Pending</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="sortBy" className="form-label mb-0">Sort by:</label>
                            <select id="sortBy" className="form-select form-select-sm">
                                <option selected>Date Posted (Newest First)</option>
                                <option>Date Posted (Oldest First)</option>
                                <option>Job Title (A-Z)</option>
                                <option>Job Title (Z-A)</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="input-group input-group-sm search-job">
                            <input type="text" className="form-control" placeholder="Search here..." />
                            <button className="btn btn-outline-secondary" type="button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="date-group mb-3">
                    <i className="far fa-calendar-alt me-2"></i> April 2025
                </div>
                
                <div className="job-card p-4">
                    <div className="row align-items-center">
                        <div className="col-md-1">
                            <span className="text-muted">#12</span>
                        </div>
                        <div className="col-md-5">
                            <h5 className="mb-1">Frontend Developer</h5>
                            <p className="text-muted small mb-0"><i className="far fa-clock me-1"></i> Posted on 04/20/2025</p>
                        </div>
                        <div className="col-md-5">
                            <div className="d-flex flex-wrap">
                                <span className="badge bg-light text-dark me-2 mb-1">React</span>
                                <span className="badge bg-light text-dark me-2 mb-1">JavaScript</span>
                                <span className="badge bg-light text-dark mb-1">CSS</span>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <span className="job-status status-open">Open</span>
                        </div>
                    </div>
                </div>
                
                <div className="job-card p-4">
                    <div className="row align-items-center">
                        <div className="col-md-1">
                            <span className="text-muted">#13</span>
                        </div>
                        <div className="col-md-5">
                            <h5 className="mb-1">Data Scientist</h5>
                            <p className="text-muted small mb-0"><i className="far fa-clock me-1"></i> Posted on 04/20/2025</p>
                        </div>
                        <div className="col-md-5">
                            <div className="d-flex flex-wrap">
                                <span className="badge bg-light text-dark me-2 mb-1">Python</span>
                                <span className="badge bg-light text-dark me-2 mb-1">Machine Learning</span>
                                <span className="badge bg-light text-dark mb-1">SQL</span>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <span className="job-status status-open">Open</span>
                        </div>
                    </div>
                </div>

                <div className="date-group mb-3 mt-4">
                    <i className="far fa-calendar-alt me-2"></i> March 2025
                </div>
                
                <div className="job-card p-4">
                    <div className="row align-items-center">
                        <div className="col-md-1">
                            <span className="text-muted">#16</span>
                        </div>
                        <div className="col-md-5">
                            <h5 className="mb-1">Python Developer</h5>
                            <p className="text-muted small mb-0"><i className="far fa-clock me-1"></i> Posted on 03/27/2025</p>
                        </div>
                        <div className="col-md-5">
                            <div className="d-flex flex-wrap">
                                <span className="badge bg-light text-dark me-2 mb-1">Python</span>
                                <span className="badge bg-light text-dark me-2 mb-1">Django</span>
                                <span className="badge bg-light text-dark mb-1">PostgreSQL</span>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <span className="job-status status-open">Open</span>
                        </div>

                    </div>
                </div>
                
                <div className="job-card p-4">
                    <div className="row align-items-center">
                        <div className="col-md-1">
                            <span className="text-muted">#14</span>
                        </div>
                        <div className="col-md-5">
                            <h5 className="mb-1">SQL Developer</h5>
                            <p className="text-muted small mb-0"><i className="far fa-clock me-1"></i> Posted on 03/20/2025</p>
                        </div>
                        <div className="col-md-5">
                            <div className="d-flex flex-wrap">
                                <span className="badge bg-light text-dark me-2 mb-1">SQL</span>
                                <span className="badge bg-light text-dark me-2 mb-1">Database</span>
                                <span className="badge bg-light text-dark mb-1">ETL</span>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <span className="job-status status-open">Open</span>
                        </div>

                    </div>
                </div>
                
                <div className="job-card p-4">
                    <div className="row align-items-center">
                        <div className="col-md-1">
                            <span className="text-muted">#15</span>
                        </div>
                        <div className="col-md-5">
                            <h5 className="mb-1">Project Manager</h5>
                            <p className="text-muted small mb-0"><i className="far fa-clock me-1"></i> Posted on 03/20/2025</p>
                        </div>
                        <div className="col-md-5">
                            <div className="d-flex flex-wrap">
                                <span className="badge bg-light text-dark me-2 mb-1">Agile</span>
                                <span className="badge bg-light text-dark me-2 mb-1">Scrum</span>
                                <span className="badge bg-light text-dark mb-1">JIRA</span>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <span className="job-status status-open">Open</span>
                        </div>

                    </div>
                </div>
                
                <nav aria-label="Page navigation" className="job-post">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
            </div>
        </div>
</div></>
}
export default JobPostingPage;
