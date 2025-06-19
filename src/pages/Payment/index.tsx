import '../../assets/css/job-post.css';
import visa from '../../assets/img/visa.png';
import payment from '../../assets/img/payment.png';
import credit from '../../assets/img/credit-card.png';
import landmark from '../../assets/img/landmark.png';
import wallet from '../../assets/img/wallet.png';

const PaymentPage = ()=>{
    
    return <div className="container">
        <div className="profile-header p-4 mb-4">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                    <h2 className="mb-1">Payment Information</h2>
                    <p>Choose payment method</p>
                </div>

            </div>
        </div>

        <div className="row">
            <div className="payment-card">
               
                
                <div className="mb-4">
                    <h5 className="mb-3">Choose payment method</h5>
                    
                    <div className="payment-method active">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="paymentMethod" id="creditCard" checked/>
                            <label className="form-check-label d-flex align-items-center" htmlFor="creditCard">
                                <img src={credit} alt="Credit Card" className="card-icon"/>
                                Credit/Debit Card
                            </label>
                        </div>
                    </div>
                    
                    <div className="payment-method">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="paymentMethod" id="netBanking"/>
                            <label className="form-check-label d-flex align-items-center" htmlFor="netBanking">
                                <img src={landmark} alt="Net Banking" className="card-icon"/>
                                Net Banking
                            </label>
                        </div>
                    </div>
                    
                    <div className="payment-method">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="paymentMethod" id="wallet"/>
                            <label className="form-check-label d-flex align-items-center" htmlFor="wallet">
                                <img src={wallet} alt="Wallet" className="card-icon"/>
                                Wallet
                            </label>
                        </div>
                    </div>
                </div>
                
                <div className="mb-4">
                    <h5 className="mb-3">Card Details</h5>
                    
                    <div className="mb-3">
                        <label htmlFor="cardNumber" className="form-label">Card Number</label>
                        <div className="card-input-container">
                            <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" />
                            <i className="far fa-credit-card"></i>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                            <div className="card-input-container">
                                <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" />
                                <i className="far fa-calendar-alt"></i>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="cvv" className="form-label">CVV</label>
                            <div className="card-input-container">
                                <input type="text" className="form-control" id="cvv" placeholder="123"/>
                                <i className="fas fa-lock"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">We Accept:</label>
                        <div className="d-flex">
                            <img src={payment} alt="Rupay" className="me-2"style={{ height: '30px' }}/>
                            <img src={visa} alt="VISA" style={{ height: '30px' }}/>
                        </div>
                    </div>
                </div>
                
                <div className="mb-4">
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="termsCheck" checked/>
                        <label className="form-check-label" htmlFor="termsCheck" >
                            I agree with the <a href="#" className="text-primary-custom">Privacy Policy</a> by proceeding with this payment
                        </label>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                        <h6 className="mb-0">Total Amount Payable</h6>
                        <div className="payment-amount">₹1000.00</div>
                    </div>
                </div>
                
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-secondary">
                        Cancel
                    </button>
                    <button className="btn btn-pay">
                        <i className="fas fa-lock me-1"></i> Make Payment
                    </button>
                </div>
            </div>
        </div>
        </div>
}
export default PaymentPage;
