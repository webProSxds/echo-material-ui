import '../../assets/css/dashboard.css';
import img2 from '../../assets/img/img2.png';
import { AcitivityCard, DelegatorCard } from 'echo-core-lib';
import { ProfileHeader } from '../../shared/ProfileHeader';
import { Heading } from '../../shared/Heading';
import { DashBoardCard } from '../../shared/DashBoardCard';

const DashBoardPage = () => {
  const dashBoardData = [
    {
      count: 12,
      name: 'Active Delegators',
    },
    {
      count: 8,
      name: 'Job Requirements',
    },
    {
      count: 5,
      name: 'Interview Slots',
    },
  ];
  const activityCardsData = [
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
  ];
  const deletegationCardData = [
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
  ];
  const skillsData = [
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
  ];
  return (
    <>
      <div className='container'>
          <ProfileHeader
            userName={'Viren Sree!'}
            desc={`Here's what's happening with your account today`}
          />
        <div className='row mb-4 top-cards'>
          {dashBoardData.map(item => (
            <DashBoardCard data={item} />
          ))}
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
              {activityCardsData.map(data => AcitivityCard(data))}
            </div>
          </div>
          <div className='col-lg-8 mb-4'>
            <div className='card  mb-4'>
              <div className='card-body deli'>
                <Heading title='Connected Delegators' />
                {deletegationCardData.map(item => DelegatorCard(item))}
              </div>
            </div>

            <div className='card'>
              <div className='card-body deli'>
                <Heading title='Suggested Delegators' />
                {skillsData.map(item => DelegatorCard(item))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoardPage;
