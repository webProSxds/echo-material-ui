import { Link } from 'react-router-dom';
import Footer from '../../components/common/header-footer/footer';
import Header from '../../components/common/header-footer/header';

const SignUpPage = () => {
  return (
    <div className="wrapper-login">
      <Header />
      <div className='auth-container'>
        <div className='auth-card'>
          <div className='brand-logo'>
            <span className='primary'>Eco</span> <span className='dark'>Connect</span>
          </div>

          <h2 className='text-center mb-4'>Create your account</h2>

          <div className='social-login'>
            <button className='social-btn'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault1'
                />
                <label className='form-check-label' htmlFor='flexRadioDefault1'>
                  Advisor
                </label>
              </div>
            </button>
            <button className='social-btn'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault2'
                  checked
                />
                <label className='form-check-label' htmlFor='flexRadioDefault2'>
                  Delegator
                </label>
              </div>
            </button>
          </div>

          <div className='divider'>
            <span className='divider-text'>OR</span>
          </div>

          <form id='signupForm'>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='firstName'
                  placeholder='First name'
                  required
                />
              </div>
              <div className='col-md-6 mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='lastName'
                  placeholder='Last name'
                  required
                />
              </div>
            </div>

            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='Email address'
              required
            />

            <div className='password-container'>
              <input
                type='password'
                className='form-control'
                id='password'
                placeholder='Password'
                required
              />
              <span className='password-toggle' id='togglePassword'>
                <i className='far fa-eye'></i>
              </span>
            </div>

            <div className='password-container'>
              <input
                type='password'
                className='form-control'
                id='confirmPassword'
                placeholder='Confirm password'
                required
              />
              <span className='password-toggle' id='toggleConfirmPassword'>
                <i className='far fa-eye'></i>
              </span>
            </div>

            <div className='form-check mb-4'>
              <input className='form-check-input' type='checkbox' id='termsCheck' required />
              <label className='form-check-label' htmlFor='termsCheck'>
                I agree to the{' '}
                <a href='#' className='text-primary-custom'>
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href='#' className='text-primary-custom'>
                  Privacy Policy
                </a>
              </label>
            </div>
            <div className='social-login'>
              <button className='social-btn'>
                <i className='fab fa-google'></i> Google
              </button>
              <button className='social-btn'>
                <i className='fab fa-linkedin'></i> LinkedIn
              </button>
            </div>
            <button type='submit' className='btn btn-primary-custom mb-3'>
              Sign Up
            </button>
          </form>

          <div className='auth-footer'>
            Already have an account? <Link to="/">Sign in</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SignUpPage;
