import Footer from '../../components/common/header-footer/footer';
import '../../assets/css/sign-up-log-in.css';
import Header from '../../components/common/header-footer/header';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'echo-core-lib';
import { useState } from 'react';
import { InputPassword } from '../../shared/InputPassword';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: any) => (e: any) => {
    // setFormData(prev => ({
    //   ...prev,
    //   [field]: e.target.value
    // }));
    
    // // Clear error when user starts typing
    // if (errors?.[field]) {
    //   setErrors(prev => ({
    //     ...prev,
    //     [field]: ''
    //   }));
    // }
  };
    const validateForm = () => {
    const newErrors = {email:"",password:""};

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData?.password?.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleLogin = async () => {
    // navigate('/dashboard');
        if (true) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        navigate('/dashboard');
      } catch (error) {
        console.error('Login error:', error);
        setErrors({ general: 'Login failed. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
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
            <InputPassword
              className='form-control'
              id='password'
              placeholder='Password'
              handler={() => {}}
              type='password'
              showEye
            />
            <div className='social-login'>
              <Button
                className='social-btn'
                element={
                  <>
                    <i className='fab fa-google'></i> Google
                  </>
                }
              />
              <Button
                className='social-btn'
                element={
                  <>
                    {' '}
                    <i className='fab fa-linkedin'></i> LinkedIn
                  </>
                }
              />
            </div>
            <Button
              text={isLoading ? 'Signing In...' : 'Sign In'}
              type='submit'
              className='btn btn-primary-custom mb-3'
              handler={handleLogin}
            />
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
