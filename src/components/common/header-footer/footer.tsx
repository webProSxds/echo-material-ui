import '../../../assets/css/header-footer.css';
const Footer = ()=>{
    return <footer className="bg-white py-4 border-top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    <span className="text-muted">© 2025 Eco Connect. All rights reserved.</span>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <a href="#" className="text-decoration-none text-muted me-3">Privacy Policy</a>
                    <a href="#" className="text-decoration-none text-muted me-3">Terms of Service</a>
                    <a href="#" className="text-decoration-none text-muted">Contact Us</a>
                </div>
            </div>
        </div>
    </footer>
}
export default Footer;
