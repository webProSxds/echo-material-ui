import '../../assets/css/dashboard.css';
import img2 from '../../assets/img/img2.png';
import { AcitivityCard, DelegatorCard } from 'echo-core-lib';
import { ProfileHeader } from '../../shared/ProfileHeader';

const DashBoardPage = () => {
  return (
    <>
      <div className='container'>
        {
          <ProfileHeader userName={"Viren Sree!"}  desc={`Here's what's happening with your account today`}/>
        }
        <div className='row mb-4 top-cards'>
          <div className='col-md-4 mb-3 mb-md-0'>
            <div className='dashboard-card one'>
              <div className='stat-number'>12</div>
              <div className='stat-label'>Active Delegators</div>
              <div className='mt-3'>
                <a href='#' className='text-primary-custom text-decoration-none small'>
                  View all <i className='fas fa-arrow-right ms-1'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-3 mb-md-0'>
            <div className='dashboard-card two '>
              <div className='stat-number'>8</div>
              <div className='stat-label'>Job Requirements</div>
              <div className='mt-3'>
                <a href='#' className='text-primary-custom text-decoration-none small'>
                  View all <i className='fas fa-arrow-right ms-1'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='dashboard-card'>
              <div className='stat-number three'>5</div>
              <div className='stat-label'>Interview Slots</div>
              <div className='mt-3'>
                <a href='#' className='text-primary-custom text-decoration-none small'>
                  View all <i className='fas fa-arrow-right ms-1'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-4'>
            <div className='dashboard-card'>
              <div className='d-flex justify-content-between align-items-center mb-4'>
                <h4 className='section-title mb-0'>Recent Activity</h4>
                <a href='#' className='text-primary-custom text-decoration-none small'>
                  View all
                </a>
              </div>

              {[
                {
                  heading: 'Requirement #12',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '1 hour ago',
                },
                {
                  heading: 'Requirement #13',
                  desc: 'Lorems ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '1 hour ago',
                },
                {
                  heading: 'Requirement #14',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '1 hour ago',
                },
              ].map(data => AcitivityCard(data))}
            </div>
          </div>
          <div className='col-lg-8 mb-4'>
            <div className='card  mb-4'>
              <div className='card-body deli'>
                <div className='heading'>
                  <h4 className='section-title'>Connected Delegators</h4>
                </div>
                {[
                  {
                    path: img2,
                    username: 'siva',
                    skills: 'Phyotn',
                  },
                  {
                    path: img2,
                    username: 'siva',
                    skills: 'Phyotn',
                  },
                  {
                    path: img2,
                    username: 'sankar',
                    skills: 'Java',
                  },
                ].map(item => DelegatorCard(item))}
              </div>
            </div>

            <div className='card'>
              <div className='card-body deli'>
                <div className='heading'>
                  <h4 className='section-title'>Suggested Delegators</h4>
                </div>
                {[
                  {
                    path: img2,
                    username: 'siva',
                    skills: 'Phyotn',
                  },
                  {
                    path: img2,
                    username: 'siva',
                    skills: 'Phyotn',
                  },
                  {
                    path: img2,
                    username: 'sankar',
                    skills: 'Java',
                  },
                ].map((item) => DelegatorCard(item))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoardPage;
