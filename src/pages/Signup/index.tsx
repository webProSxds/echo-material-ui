import { Link } from 'react-router-dom';
import Footer from '../../components/common/header-footer/footer';
import Header from '../../components/common/header-footer/header';
import { Button, Radio} from 'echo-core-lib';
import { useState } from 'react';
import { InputPassword } from '../../shared/InputPassword';

const SignUpPage = () => {
      const [selectedValue, setSelectedValue] = useState("Delegator");
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
            <Button className='social-btn' element={<><div className='form-check'>
                <Radio
                  className='form-check-input'
                  namez='flexRadioDefault'
                  classNameLable='form-check-label' htmlFor='flexRadioDefault1'
                  text="Advisor"
                  value="Advisor"
                  id='flexRadioDefault1'
                  ischecked={ selectedValue === 'Advisor'}
                  handler={setSelectedValue}
                />
              </div></>} />
            <Button className='social-btn' element={<>  <div className='form-check'>
              <Radio
                  className='form-check-input'
                  namez='flexRadioDefault'
                  classNameLable='form-check-label'
                  id='flexRadioDefault2'
                  htmlFor='flexRadioDefault2'
                  text="Delegator"
                  value="Delegator"
                  ischecked={ selectedValue === 'Delegator'}
                  handler={setSelectedValue}
                />
              </div></>}/>
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

              <InputPassword
                className='form-control'
                id='password'
                placeholder='Password'
                handler={()=>{}}
              />
              <InputPassword
                className='form-control'
                id='confirmPassword'
                placeholder='Confirm password'
                handler={()=>{}}
              />
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
              <Button className='social-btn' element={<><i className='fab fa-google'></i> Google</>}/>
              <Button className='social-btn' element={<><i className='fab fa-linkedin'></i> LinkedIn</>} />
            </div>
            <Button type='submit' className='btn btn-primary-custom mb-3' text='Sign Up'/>
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
