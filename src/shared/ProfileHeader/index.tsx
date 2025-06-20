type props = {
  userName: string;
  desc:string;
};
const ProfileHeader = ({
  userName,
  desc,
}: props) => {
  return (
        <div className='profile-header p-4 mb-4'>
          <div className='row align-items-center'>
            <div className='col-md-12 text-center text-md-start'>
              <h2 className='mb-1'>Welcome, {userName}</h2>
              <p>{desc}</p>
            </div>
          </div>
        </div>
  );
};
export { ProfileHeader };
