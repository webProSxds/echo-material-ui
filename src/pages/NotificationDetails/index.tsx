import '../../assets/css/notification.css';

const NotificationDetailsPage = ()=>{
    
    return <><div className="container">
    <div className="profile-header p-4 mb-4">
        <div className="row align-items-center">
            <div className="col-md-10 text-md-start">
                <h2 className="mb-1">Notifications Details</h2>
            </div>
        </div>
    </div>
            
    <div className="notification-detail-container">

        <div className="notification-body">
            <div className="notification-meta">
                <div className="notification-icon email">
                    <i className="fas fa-envelope"></i>
                </div>
                <div>
                    <div className="notification-sender">TechSolutions Inc.</div>
                    <div className="notification-time">Received: June 10, 2023 at 2:45 PM</div>
                </div>
            </div>
            
            <div className="notification-content">
                <h3 className="notification-title">Project Invitation: E-commerce Website Redesign</h3>
                <div className="notification-message">
                    Dear [Your Name],

                    We were impressed by your profile and would like to invite you to collaborate on our upcoming e-commerce website redesign project. 

                    The project involves redesigning our client's online store to improve user experience and increase conversion rates. We believe your expertise in UX design would be invaluable for this project.

                    Please review the project details below and let us know if you're available to participate. We'd be happy to discuss the terms and answer any questions you might have.

                    Best regards,
                    Sarah Johnson
                    Project Manager
                    TechSolutions Inc.
                </div>
            </div>
            
            <div className="project-details">
                <h5>Project Details</h5>
                <div className="detail-row">
                    <div className="detail-label">Project Name:</div>
                    <div className="detail-value">E-commerce Website Redesign</div>
                </div>
                <div className="detail-row">
                    <div className="detail-label">Client:</div>
                    <div className="detail-value">FashionForward Retail</div>
                </div>
                <div className="detail-row">
                    <div className="detail-label">Timeline:</div>
                    <div className="detail-value">June 20 - August 15, 2023 (8 weeks)</div>
                </div>
                <div className="detail-row">
                    <div className="detail-label">Budget Range:</div>
                    <div className="detail-value">$5,000 - $7,500</div>
                </div>
                <div className="detail-row">
                    <div className="detail-label">Skills Required:</div>
                    <div className="detail-value">UX Design, UI Design, E-commerce Experience</div>
                </div>
            </div>
            
            <h5>Attachments</h5>
            <div className="attachment-card">
                <div className="attachment-icon">
                    <i className="fas fa-file-pdf"></i>
                </div>
                <div className="attachment-info">
                    <div className="attachment-name">Project_Brief.pdf</div>
                    <div className="attachment-size">2.4 MB</div>
                </div>
                <button className="btn btn-sm btn-outline-primary">Download</button>
            </div>
            
            <div className="attachment-card">
                <div className="attachment-icon">
                    <i className="fas fa-file-image"></i>
                </div>
                <div className="attachment-info">
                    <div className="attachment-name">Current_Designs.zip</div>
                    <div className="attachment-size">5.1 MB</div>
                </div>
                <button className="btn btn-sm btn-outline-primary">Download</button>
            </div>
            
            <div className="action-buttons">
                <button className="btn btn-primary">
                    <i className="fas fa-check me-2"></i>Accept Invitation
                </button>
                <button className="btn btn-outline-secondary">
                    <i className="fas fa-times me-2"></i>Decline
                </button>
                <button className="btn btn-outline-secondary">
                    <i className="fas fa-comment me-2"></i>Message Client
                </button>
                <button className="btn btn-outline-secondary">
                    <i className="fas fa-calendar me-2"></i>Schedule Call
                </button>
            </div>
        </div>
    </div>
</div></>
}
export default NotificationDetailsPage;
