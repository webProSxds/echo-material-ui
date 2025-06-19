
import '../../../assets/css/header-footer.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = ()=>{
//   const navigate = useNavigate();
//   const handleSignup = () => {
//     navigate('/signup');
//   };
    return <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container">
            <a className="navbar-brand" href="#">
                <span  style={{color: 'var(--primary)'}}>Eco</span> <span style={{color: 'var(--primary-drak)'}}>Connect</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#how-it-works">How It Works</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#testimonials">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                <div className="ms-lg-3 mt-3 mt-lg-0">
                    <Link className="btn btn-outline-custom me-2" style={{ borderRadius: '30px' }}  to="/signup">Login</Link>
                    <Link className="btn btn-outline-custom me-2" style={{ borderRadius: '30px' }}  to="/">Sign Up</Link>
                </div>
            </div>
        </div>
    </nav>
}
export default Header;
