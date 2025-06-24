import home from '../../assets/img/home.png';
import '../../assets/css/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='hero-section'>
        <div className='container position-relative z-index-2'>
          <div className='row align-items-center'>
            <div className='col-lg-6 mb-5 mb-lg-0'>
              <h1 className='display-4 fw-bold mb-4'>
                Bridge the Gap Between Skills and Opportunity
              </h1>
              <p className='lead mb-4'>
                Eco Connect enables companies and experts to connect, collaborate, and accelerate
                interviews — with AI-powered support
              </p>
              <div className='d-flex flex-wrap hero-buttons'>
                <a
                  href='#'
                  className='btn btn-accent me-3 mb-3'
                  style={{ backgroundColor: '#000' }}
                >
                  I'm an Advisor
                </a>
                <a href='#' className='btn btn-light mb-3' style={{ padding: '12px 24px' }}>
                  I'm a Delegator
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src={home} alt='Team Collaboration' className='img-fluid rounded-3 shadow' />
            </div>
          </div>
        </div>
      </section>

      <section className='how-it-works py-5'>
        <div className='container'>
          <div className='text-center mb-5'>
            <span className='badge bg-primary-soft text-primary mb-3 px-3 py-2 rounded-pill'>
              Our Process
            </span>
            <h2 className='display-5 fw-bold mb-3'>How ECHO-CONNECT Works</h2>
            <p className='lead text-muted mx-auto' style={{ maxWidth: '700px' }}>
              Smart matching technology connects professionals with opportunities in just a few
              simple steps
            </p>
          </div>

          <div className='row g-4'>
            <div className='col-lg-6'>
              <div className='process-card h-100 p-4 p-lg-5 rounded-4'>
                <div className='d-flex align-items-center mb-4'>
                  <div className='icon-wrapper bg-primary-soft rounded-3 p-3 me-3'>
                    <svg
                      width='28'
                      height='28'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
                        fill='#4361ee'
                      />
                      <path
                        d='M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z'
                        fill='#4361ee'
                      />
                    </svg>
                  </div>
                  <h3 className='mb-0'>For Advisors</h3>
                </div>

                <ul className='process-steps'>
                  <li className='d-flex mb-3'>
                    <div className='step-badge bg-primary text-white rounded-circle me-3'>1</div>
                    <div>
                      <h5 className='mb-1'>Post Requirements</h5>
                      <p className='text-muted mb-0'>
                        AI-guided job posting to attract the right talent
                      </p>
                    </div>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='step-badge bg-primary text-white rounded-circle me-3'>2</div>
                    <div>
                      <h5 className='mb-1'>Smart Matching</h5>
                      <p className='text-muted mb-0'>Our algorithm surfaces top candidates</p>
                    </div>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='step-badge bg-primary text-white rounded-circle me-3'>3</div>
                    <div>
                      <h5 className='mb-1'>Select Experts</h5>
                      <p className='text-muted mb-0'>Choose from pre-vetted professionals</p>
                    </div>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='step-badge bg-primary text-white rounded-circle me-3'>4</div>
                    <div>
                      <h5 className='mb-1'>Manage Projects</h5>
                      <p className='text-muted mb-0'>Complete workflow from one dashboard</p>
                    </div>
                  </li>
                  <li className='d-flex'>
                    <div className='step-badge bg-primary text-white rounded-circle me-3'>5</div>
                    <div>
                      <h5 className='mb-1'>Performance Insights</h5>
                      <p className='text-muted mb-0'>Analytics to optimize your hiring</p>
                    </div>
                  </li>
                </ul>
                <Link className='btn btn-primary mt-4 px-4 py-2' to='/signup?type=advisor'>
                  Get Started as Advisor<i className='fas fa-arrow-right ms-2'></i>
                </Link>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='process-card h-100 p-4 p-lg-5 rounded-4'>
                <div className='d-flex align-items-center mb-4'>
                  <div className='icon-wrapper bg-info-soft rounded-3 p-3 me-3'>
                    <svg
                      width='28'
                      height='28'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21'
                        stroke='#0dcaf0'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
                        stroke='#0dcaf0'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13'
                        stroke='#0dcaf0'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88'
                        stroke='#0dcaf0'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </div>
                  <h3 className='mb-0'>For Delegators</h3>
                </div>

                <ul className='process-steps'>
                  <li className='d-flex mb-3'>
                    <div className='step-badge bg-info text-white rounded-circle me-3'>1</div>
                    <div>
                      <h5 className='mb-1'>Create Profile</h5>
                      <p className='text-muted mb-0'>
                        Showcase your skills with structured profiles
                      </p>
                    </div>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='step-badge bg-info text-white rounded-circle me-3'>2</div>
                    <div>
                      <h5 className='mb-1'>Get Matched</h5>
                      <p className='text-muted mb-0'>Receive suggested opportunities</p>
                    </div>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='step-badge bg-info text-white rounded-circle me-3'>3</div>
                    <div>
                      <h5 className='mb-1'>Apply with Confidence</h5>
                      <p className='text-muted mb-0'>Interview assistance and tools</p>
                    </div>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='step-badge bg-info text-white rounded-circle me-3'>4</div>
                    <div>
                      <h5 className='mb-1'>Grow Your Career</h5>
                      <p className='text-muted mb-0'>Receive constructive feedback</p>
                    </div>
                  </li>
                  <li className='d-flex'>
                    <div className='step-badge bg-info text-white rounded-circle me-3'>5</div>
                    <div>
                      <h5 className='mb-1'>Track Progress</h5>
                      <p className='text-muted mb-0'>Monitor all applications in one place</p>
                    </div>
                  </li>
                </ul>
                <Link className='btn btn-info mt-4 px-4 py-2' to='/signup?type=delegator'>
                  Join as Delegator<i className='fas fa-arrow-right ms-2'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='stats-section py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-5 col-6 mb-4 mb-md-0'>
              <div className='stat-card text-center p-4 rounded-4 shadow-sm'>
                <div className='stat-icon mb-3'>
                  <svg
                    width='48'
                    height='48'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
                      fill='#4361ee'
                    />
                    <path
                      d='M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z'
                      fill='#4361ee'
                    />
                  </svg>
                </div>
                <h3 className='stat-number mb-2 fw-bold'>5,000+</h3>
                <p className='stat-label text-muted mb-0'>Expert Advisors</p>
                <div
                  className='stat-underline mt-3 mx-auto'
                  style={{
                    width: ' 60px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #3f37c9, #4cc9f0)',
                  }}
                ></div>
              </div>
            </div>

            <div className='col-md-5 col-6'>
              <div className='stat-card text-center p-4 rounded-4 shadow-sm'>
                <div className='stat-icon mb-3'>
                  <svg
                    width='48'
                    height='48'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21'
                      stroke='#3f37c9'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
                      stroke='#3f37c9'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13'
                      stroke='#3f37c9'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88'
                      stroke='#3f37c9'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
                <h3 className='stat-number mb-2 fw-bold'>5,000+</h3>
                <p className='stat-label text-muted mb-0'>Active Delegators</p>
                <div
                  className='stat-underline mt-3 mx-auto'
                  style={{
                    width: ' 60px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #3f37c9, #4cc9f0)',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='py-5' id='features'>
        <div className='container py-5'>
          <div className='row justify-content-center mb-5'>
            <div className='col-lg-8 text-center'>
              <h2 className='section-title'>Why Choose Eco Connect</h2>
              <p className='lead'>
                Powerful features designed to streamline your hiring or job search process
              </p>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-md-6 col-lg-3'>
              <div className='feature-card p-4'>
                <div className='feature-icon'>
                  <i className='fas fa-robot'></i>
                </div>
                <h4 className='text-center mb-3'>AI-Powered Matching</h4>
                <p className='text-center text-muted'>
                  Our advanced algorithms connect the right talent with the right opportunities.
                </p>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <div className='feature-card p-4'>
                <div className='feature-icon'>
                  <i className='fas fa-bolt'></i>
                </div>
                <h4 className='text-center mb-3'>Fast Onboarding</h4>
                <p className='text-center text-muted'>
                  Get started in minutes with our streamlined profile setup process.
                </p>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <div className='feature-card p-4'>
                <div className='feature-icon'>
                  <i className='fas fa-chart-line'></i>
                </div>
                <h4 className='text-center mb-3'>Performance Analytics</h4>
                <p className='text-center text-muted'>
                  Track your hiring or job search metrics with detailed insights.
                </p>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <div className='feature-card p-4'>
                <div className='feature-icon'>
                  <i className='fas fa-comments'></i>
                </div>
                <h4 className='text-center mb-3'>Interview Support</h4>
                <p className='text-center text-muted'>
                  Get AI-assisted preparation for interviews and candidate evaluations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5' id='testimonials'>
        <div className='container py-5'>
          <div className='row justify-content-center mb-5'>
            <div className='col-lg-8 text-center'>
              <h2 className='section-title'>What Our Users Say</h2>
              <p className='lead'>Success stories from our community of advisors and delegators</p>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-md-4'>
              <div className='testimonial-card'>
                <div className='testimonial-rating'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
                <p className='mb-4'>
                  "Eco Connect transformed our hiring process. We found the perfect candidate in
                  half the usual time, and the AI matching was spot on."
                </p>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://via.placeholder.com/50'
                    alt='Sarah Johnson'
                    className='rounded-circle me-3'
                    width='50'
                    height='50'
                  />
                  <div>
                    <h6 className='mb-0'>Sarah Johnson</h6>
                    <small className='text-muted'>CTO at TechSolutions</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='testimonial-card'>
                <div className='testimonial-rating'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
                <p className='mb-4'>
                  "As a freelancer, I've never had such relevant opportunities come to me. The
                  interview prep tools helped me land my dream project."
                </p>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://via.placeholder.com/50'
                    alt='Michael Chen'
                    className='rounded-circle me-3'
                    width='50'
                    height='50'
                  />
                  <div>
                    <h6 className='mb-0'>Michael Chen</h6>
                    <small className='text-muted'>UX Designer</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='testimonial-card'>
                <div className='testimonial-rating'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
                <p className='mb-4'>
                  "The quality of candidates we receive through Eco Connect is consistently higher
                  than other platforms. It's become our primary hiring tool."
                </p>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://via.placeholder.com/50'
                    alt='David Rodriguez'
                    className='rounded-circle me-3'
                    width='50'
                    height='50'
                  />
                  <div>
                    <h6 className='mb-0'>David Rodriguez</h6>
                    <small className='text-muted'>HR Director at InnovateCo</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='cta-section' id='contact'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <h2 className='display-5 fw-bold mb-4'>Ready to Transform Your Hiring or Career?</h2>
              <p className='lead mb-5'>
                Join thousands of professionals and companies already benefiting from Eco Connect
              </p>
              <div className='d-flex flex-wrap justify-content-center'>
                <Link className='btn btn-light btn-lg me-3 mb-3' to='/login'>
                  I'm an Advisor
                </Link>
                <Link className='btn btn-outline-light btn-lg mb-3' to='/login'>
                  I'm a Delegator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
