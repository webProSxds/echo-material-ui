const DashBoardCard = (props:any) => {
  const {data:{name,count}} =props;
  return (
    <div className='col-md-4 mb-3 mb-md-0'>
      <div className='dashboard-card'>
        <div className='stat-number'>{count}</div>
        <div className='stat-label'>{name}</div>
        <div className='mt-3'>
          <a href='#' className='text-primary-custom text-decoration-none small'>
            View all <i className='fas fa-arrow-right ms-1'></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export { DashBoardCard };
