import '../../assets/css/job-post.css';

const PricingPage = ()=>{
    
    return <><div className="container">
        <div className="profile-header p-4 mb-4">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                    <h2 className="mb-1">Choose a Plan</h2>
                    <p>Select the subscription plan that works best for your needs</p>
                </div>

            </div>
        </div>

        <div className="row">
  <div className="col-md-4 mb-4">
    <div className="pricing-card">
        <div className="pricing-duration">15 Days</div>
        <div className="pricing-amount">₹700</div>
        <div className="pricing-period">One-time payment</div>
        
        <ul className="pricing-features">
            <li>Access to all delegators</li>
            <li>5 job postings</li>
            <li>Basic matching algorithm</li>
            <li>Email support</li>
        </ul>
        
        <button className="btn btn-outline-primary w-100">Choose Plan</button>
    </div>
</div>

<div className="col-md-4 mb-4">
    <div className="pricing-card popular">
        <div className="popular-badge">Popular</div>
        <div className="pricing-duration">1 Month</div>
        <div className="pricing-amount">₹1000</div>
        <div className="pricing-period">per month</div>
        
        <ul className="pricing-features">
            <li>Access to all delegators</li>
            <li>Unlimited job postings</li>
            <li>Advanced matching algorithm</li>
            <li>Priority support</li>
            <li>Analytics dashboard</li>
        </ul>
        
        <button className="btn btn-accent w-100 rounded-pill">Choose Plan</button>
    </div>
</div>

<div className="col-md-4 mb-4">
    <div className="pricing-card">
        <div className="pricing-duration">3 Months</div>
        <div className="pricing-amount">₹2700</div>
        <div className="pricing-period">₹900 per month</div>
        
        <ul className="pricing-features">
            <li>Access to all delegators</li>
            <li>Unlimited job postings</li>
            <li>Advanced matching algorithm</li>
            <li>Priority support</li>
            <li>Analytics dashboard</li>
            <li>Dedicated account manager</li>
        </ul>
        
        <button className="btn btn-outline-primary w-100 ">Choose Plan</button>
    </div>
</div>
</div>

<div className="row justify-content-center mt-4">
<div className="col-lg-8">
    <div className="card border-0 shadow-sm">
        <div className="card-body text-center">
            <h5 className="mb-3">Need a custom plan?</h5>
            <p className="text-muted mb-4">Contact our sales team to discuss enterprise solutions tailored to your specific requirements.</p>
            <button className="btn btn-primary-custom rounded-pill">
                 Contact Sales
            </button>
        </div>
    </div>
</div>
</div>
        </div>
   </>
}
export default PricingPage;
