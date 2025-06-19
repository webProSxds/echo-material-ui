import Footer from '../../components/common/header-footer/footer';
import '../../assets/css/sign-up-log-in.css';
import Header from '../../components/common/header-footer/header';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };
  return (
    <div className='wrapper-login'>
      <Header />
      <div className='auth-container'>
        <div className='auth-card'>
          <div className='brand-logo'>
            <span className='primary'>Eco</span> <span className='dark'>Connect</span>
          </div>

          <h2 className='text-center mb-4'>Login</h2>

          <form id='signupForm'>
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
            <div className='social-login'>
              <button className='social-btn'>
                <i className='fab fa-google'></i> Google
              </button>
              <button className='social-btn'>
                <i className='fab fa-linkedin'></i> LinkedIn
              </button>
            </div>
            <button type='submit' className='btn btn-primary-custom mb-3' onClick={handleLogin}>
              Sign in
            </button>
          </form>

          <div className='auth-footer'>
            Don’t have an account? <Link to='/signup'>Sign up</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default LoginPage;
