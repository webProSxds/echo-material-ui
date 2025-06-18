import "../../assets/css/profile.css";
import pimg from "../../assets/img/p-img.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";

const AdvisoryProfilePage = ()=>{
    
    return <><div className="container">
      <div className="profile-header p-4 mb-4">
        <div className="row align-items-center">
          <div className="col-md-2 text-center mb-3 mb-md-0">
            <img
              src={pimg}
              alt="Profile"
              className="profile-img rounded-circle shadow"
            />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h2 className="mb-1">Veera Srinivas Ravella</h2>
            <p className="mb-2">Senior UI/UX Designer & Frontend Developer</p>
            <div
              className="d-flex flex-wrap justify-content-center justify-content-md-start"
            >
              <span className="badge bg-light text-dark me-2 mb-2"
                ><i className="fas fa-star me-1"></i> 4.8 Rating (27 reviews)</span
              >
              <span className="badge bg-light text-dark mb-2"
                ><i className="fas fa-check-circle me-1"></i> Verified</span
              >
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h4 className="section-title">About Me</h4>
          <p>
            I'm a passionate UI/UX designer with 8+ years of experience creating
            intuitive and beautiful digital experiences. My approach combines
            user-centered design principles with technical expertise in frontend
            development, allowing me to bridge the gap between design and
            implementation.
          </p>
          <p>
            Specializing in enterprise SaaS applications, I've helped numerous
            startups and established companies improve their user engagement and
            satisfaction metrics. When I'm not designing, you can find me
            mentoring junior designers or contributing to open-source design
            systems.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="section-title">Contact Information</h4>

              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <div>
                  <h6 className="mb-0">Email</h6>
                  <p className="mb-0">veera@amail.ecom</p>
                </div>
                <div className="ms-auto form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="emailToggle"
                    checked
                  />
                </div>
              </div>

              <div className="contact-method">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <h6 className="mb-0">WhatsApp</h6>
                  <p className="mb-0">+91 1234567809</p>
                </div>
                <div className="ms-auto form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="whatsappToggle"
                    checked
                  />
                </div>
              </div>

              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <div>
                  <h6 className="mb-0">Phone</h6>
                  <p className="mb-0">+91 1234567809</p>
                </div>
                <div className="ms-auto form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="phoneToggle"
                  />
                </div>
              </div>

              <div className="contact-method">
                <i className="fas fa-globe"></i>
                <div>
                  <h6 className="mb-0">Portfolio Website</h6>
                  <p className="mb-0">www.veeradesigns.com</p>
                </div>
                <div className="ms-auto form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="websiteToggle"
                    checked
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h4 className="section-title">Availability</h4>

              <div
                className="d-flex justify-content-between align-items-center mb-3"
              >
                <h5 className="mb-0">February 2025</h5>
                <div>
                  <button className="btn btn-sm btn-outline-secondary me-1">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-between mb-2">
                <div className="text-center" style={{ width: "14%" }}>Su</div>
                <div className="text-center" style={{ width: "14%" }}>Mo</div>
                <div className="text-center" style={{ width: "14%" }}>Tu</div>
                <div className="text-center" style={{ width: "14%" }}>We</div>
                <div className="text-center" style={{ width: "14%" }}>Th</div>
                <div className="text-center" style={{ width: "14%" }}>Fr</div>
                <div className="text-center" style={{ width: "14%" }}>Sa</div>
              </div>

              <div className="d-flex flex-wrap">
                <div className="calendar-day">27</div>
                <div className="calendar-day">28</div>
                <div className="calendar-day">29</div>
                <div className="calendar-day">30</div>
                <div className="calendar-day">31</div>
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
                <div className="calendar-day">4</div>
                <div className="calendar-day">5</div>
                <div className="calendar-day">6</div>
                <div className="calendar-day">7</div>
                <div className="calendar-day">8</div>
                <div className="calendar-day">9</div>
                <div className="calendar-day">10</div>
                <div className="calendar-day active">11</div>
                <div className="calendar-day active">12</div>
                <div className="calendar-day">13</div>
                <div className="calendar-day">14</div>
                <div className="calendar-day">15</div>
                <div className="calendar-day">16</div>
                <div className="calendar-day">17</div>
                <div className="calendar-day">18</div>
                <div className="calendar-day">19</div>
                <div className="calendar-day">20</div>
                <div className="calendar-day">21</div>
                <div className="calendar-day">22</div>
                <div className="calendar-day">23</div>
                <div className="calendar-day">24</div>
                <div className="calendar-day">25</div>
                <div className="calendar-day">26</div>
                <div className="calendar-day">27</div>
                <div className="calendar-day">28</div>
                <div className="calendar-day">29</div>
              </div>

              <hr className="my-3" />

              <h5 className="mb-3">Upcoming Reminders</h5>

              <div className="calendar-event">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-1">Client Meeting</h6>
                  <small className="text-muted">Today, 2:00 PM</small>
                </div>
                <p className="small text-muted mb-0">
                  Project kickoff with GreenTech Solutions
                </p>
              </div>

              <div className="calendar-event">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-1">Design Review</h6>
                  <small className="text-muted">Mar 3, 11:00 AM</small>
                </div>
                <p className="small text-muted mb-0">
                  Present new dashboard designs
                </p>
              </div>

              <div className="calendar-event">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-1">Mentorship Session</h6>
                  <small className="text-muted">Mar 5, 4:30 PM</small>
                </div>
                <p className="small text-muted mb-0">
                  Weekly session with junior designers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="section-title">Professional Experience</h4>

              <div className="d-flex flex-wrap mt-2">
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  Figma</span
                >
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  Photoshop</span
                >
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  Adobe XD</span
                >
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  Illustrator</span
                >
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  User Research</span
                >
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  Wireframing</span
                >
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  Prototyping</span
                >
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  HTML5</span
                >
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  CSS3</span
                >
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  Bootstrap</span
                >
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  JavaScript</span
                >
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  React</span
                >
                <span className="skill-badge"
                  ><i className="fas fa-check-circle me-1 text-primary-custom"></i>
                  Accessibility</span
                >
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body deli">
              <div className="heading">
                <h4 className="section-title">Connected Delegators</h4>
              </div>
              <div className="delegator-card">
                <div className="row align-items-center">
                  <div className="col-md-2 text-center mb-3 mb-md-0">
                    <img
                      src={img2}
                      alt="Profile"
                      className="rounded-circle"
                      width="70"
                      height="70"
                    />
                  </div>
                  <div className="col-md-5">
                    <h5 className="mb-1">Aman Agarwal</h5>
                    <p className="text-muted small mb-2">Frontend Developer</p>
                    <div className="d-flex flex-wrap">
                      <span className="badge bg-light text-dark me-2 mb-1"
                        >React</span
                      >
                      <span className="badge bg-light text-dark me-2 mb-1"
                        >JavaScript</span
                      >
                      <span className="badge bg-light text-dark mb-1">CSS</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <p className="small text-muted mb-1">
                      <i className="far fa-calendar-alt me-1"></i> Connected: Feb
                      2025
                    </p>
                    <p className="small text-muted mb-1">
                      <i className="fab fa-whatsapp me-1"></i> +91 1234557809
                    </p>
                    <p className="small text-muted">
                      <i className="fas fa-phone me-1"></i> +91 1234567809
                    </p>
                  </div>
                  <div className="col-md-2 text-center text-md-end">
                    <button className="btn btn-sm btn-outline-custom">Email</button>
                    <button className="btn btn-sm btn-outline-custom">
                      WhatsApp
                    </button>
                    <button className="btn btn-sm btn-outline-custom">
                      Message
                    </button>
                  </div>
                </div>
              </div>

              <div className="delegator-card">
                <div className="row align-items-center">
                  <div className="col-md-2 text-center mb-3 mb-md-0">
                    <img
                      src={img3}
                      alt="Profile"
                      className="rounded-circle"
                      width="70"
                      height="70"
                    />
                  </div>
                  <div className="col-md-5">
                    <h5 className="mb-1">Binita Sharma</h5>
                    <p className="text-muted small mb-2">UX Researcher</p>
                    <div className="d-flex flex-wrap">
                      <span className="badge bg-light text-dark me-2 mb-1"
                        >User Testing</span
                      >
                      <span className="badge bg-light text-dark me-2 mb-1"
                        >Analytics</span
                      >
                      <span className="badge bg-light text-dark mb-1"
                        >Personas</span
                      >
                    </div>
                  </div>
                  <div className="col-md-3">
                    <p className="small text-muted mb-1">
                      <i className="far fa-calendar-alt me-1"></i> Connected: Jan
                      2025
                    </p>
                    <p className="small text-muted mb-1">
                      <i className="fab fa-whatsapp me-1"></i> +91 9876543210
                    </p>
                    <p className="small text-muted">
                      <i className="fas fa-phone me-1"></i> +91 9876543210
                    </p>
                  </div>
                  <div className="col-md-2 text-center text-md-end">
                    <button className="btn btn-sm btn-outline-custom">Email</button>
                    <button className="btn btn-sm btn-outline-custom">
                      WhatsApp
                    </button>
                    <button className="btn btn-sm btn-outline-custom">
                      Message
                    </button>
                  </div>
                </div>
              </div>
              <div className="delegator-card">
                <div className="row align-items-center">
                  <div className="col-md-2 text-center mb-3 mb-md-0">
                    <img
                      src={img3}
                      alt="Profile"
                      className="rounded-circle"
                      width="70"
                      height="70"
                    />
                  </div>
                  <div className="col-md-5">
                    <h5 className="mb-1">Binita Sharma</h5>
                    <p className="text-muted small mb-2">UX Researcher</p>
                    <div className="d-flex flex-wrap">
                      <span className="badge bg-light text-dark me-2 mb-1"
                        >User Testing</span
                      >
                      <span className="badge bg-light text-dark me-2 mb-1"
                        >Analytics</span
                      >
                      <span className="badge bg-light text-dark mb-1"
                        >Personas</span
                      >
                    </div>
                  </div>
                  <div className="col-md-3">
                    <p className="small text-muted mb-1">
                      <i className="far fa-calendar-alt me-1"></i> Connected: Jan
                      2025
                    </p>
                    <p className="small text-muted mb-1">
                      <i className="fab fa-whatsapp me-1"></i> +91 9876543210
                    </p>
                    <p className="small text-muted">
                      <i className="fas fa-phone me-1"></i> +91 9876543210
                    </p>
                  </div>
                  <div className="col-md-2 text-center text-md-end">
                    <button className="btn btn-sm btn-outline-custom">Email</button>
                    <button className="btn btn-sm btn-outline-custom">
                      WhatsApp
                    </button>
                    <button className="btn btn-sm btn-outline-custom">
                      Message
                    </button>
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
                    <img
                      src={img2}
                      alt="Profile"
                      className="rounded-circle"
                      width="70"
                      height="70"
                    />
                  </div>
                  <div className="col-md-5">
                    <h5 className="mb-1">Aman Agarwal</h5>
                    <p className="text-muted small mb-2">Frontend Developer</p>
                    <div className="d-flex flex-wrap">
                      <span className="badge bg-light text-dark me-2 mb-1"
                        >React</span
                      >
                      <span className="badge bg-light text-dark me-2 mb-1"
                        >JavaScript</span
                      >
                      <span className="badge bg-light text-dark mb-1">CSS</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <p className="small text-muted mb-1">
                      <i className="far fa-calendar-alt me-1"></i> Connected: Feb
                      2025
                    </p>
                    <p className="small text-muted mb-1">
                      <i className="fab fa-whatsapp me-1"></i> +91 1234557809
                    </p>
                    <p className="small text-muted">
                      <i className="fas fa-phone me-1"></i> +91 1234567809
                    </p>
                  </div>
                  <div className="col-md-2 text-center text-md-end">
                    <button className="btn btn-sm btn-outline-custom">
                      Connect
                    </button>
                    <button className="btn btn-sm btn-outline-custom">
                      Ignore
                    </button>
                  </div>
                </div>
              </div>

              <div className="delegator-card">
                <div className="row align-items-center">
                  <div className="col-md-2 text-center mb-3 mb-md-0">
                    <img
                      src={img3}
                      alt="Profile"
                      className="rounded-circle"
                      width="70"
                      height="70"
                    />
                  </div>
                  <div className="col-md-5">
                    <h5 className="mb-1">Binita Sharma</h5>
                    <p className="text-muted small mb-2">UX Researcher</p>
                    <div className="d-flex flex-wrap">
                      <span className="badge bg-light text-dark me-2 mb-1"
                        >User Testing</span
                      >
                      <span className="badge bg-light text-dark me-2 mb-1"
                        >Analytics</span
                      >
                      <span className="badge bg-light text-dark mb-1"
                        >Personas</span
                      >
                    </div>
                  </div>
                  <div className="col-md-3">
                    <p className="small text-muted mb-1">
                      <i className="far fa-calendar-alt me-1"></i> Connected: Jan
                      2025
                    </p>
                    <p className="small text-muted mb-1">
                      <i className="fab fa-whatsapp me-1"></i> +91 9876543210
                    </p>
                    <p className="small text-muted">
                      <i className="fas fa-phone me-1"></i> +91 9876543210
                    </p>
                  </div>
                  <div className="col-md-2 text-center text-md-end">
                    <button className="btn btn-sm btn-outline-custom">
                      Connect
                    </button>
                    <button className="btn btn-sm btn-outline-custom">
                      Ignore
                    </button>
                  </div>
                </div>
              </div>
              <div className="delegator-card">
                <div className="row align-items-center">
                  <div className="col-md-2 text-center mb-3 mb-md-0">
                    <img
                      src={img3}
                      alt="Profile"
                      className="rounded-circle"
                      width="70"
                      height="70"
                    />
                  </div>
                  <div className="col-md-5">
                    <h5 className="mb-1">Binita Sharma</h5>
                    <p className="text-muted small mb-2">UX Researcher</p>
                    <div className="d-flex flex-wrap">
                      <span className="badge bg-light text-dark me-2 mb-1"
                        >User Testing</span
                      >
                      <span className="badge bg-light text-dark me-2 mb-1"
                        >Analytics</span
                      >
                      <span className="badge bg-light text-dark mb-1"
                        >Personas</span
                      >
                    </div>
                  </div>
                  <div className="col-md-3">
                    <p className="small text-muted mb-1">
                      <i className="far fa-calendar-alt me-1"></i> Connected: Jan
                      2025
                    </p>
                    <p className="small text-muted mb-1">
                      <i className="fab fa-whatsapp me-1"></i> +91 9876543210
                    </p>
                    <p className="small text-muted">
                      <i className="fas fa-phone me-1"></i> +91 9876543210
                    </p>
                  </div>
                  <div className="col-md-2 text-center text-md-end">
                    <button className="btn btn-sm btn-outline-custom">
                      Connect
                    </button>
                    <button className="btn btn-sm btn-outline-custom">
                      Ignore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
}
export default AdvisoryProfilePage;
