type props = {
  title: string;
};
const Heading = ({ title }: props) => {
  return (
    <div className='heading'>
      <h4 className='section-title'>{title}</h4>
    </div>
  );
};
export { Heading };
