import '../../assets/css/notification.css';

const NotificationPage = ()=>{
    
    return <> <div className="container">
    <div className="profile-header p-4 mb-4">
        <div className="row align-items-center">
            <div className="col-md-10 text-md-start">
                <h2 className="mb-1">Notifications</h2>
            </div>
        </div>
    </div>


    <div className="notification-container">
        
        <ul className="notification-list">
            <li className="notification-item unread">
                <div className="notification-icon email">
                    <i className="fas fa-envelope"></i>
                </div>
                <div className="notification-content">
                    <div className="notification-title">
                        <span>New project invitation <span className="badge-unread"></span></span>
                        <span className="notification-time">10 min ago</span>
                    </div>
                    <p className="notification-message">
                        You've been invited to collaborate on "E-commerce Website Redesign" by TechSolutions Inc.
                    </p>
                    <div className="notification-actions">
                        <button className="btn btn-sm btn-primary">Accept</button>
                        <button className="btn btn-sm btn-outline-secondary">Decline</button>
                        <button className="btn btn-sm btn-outline-secondary">View Details</button>
                    </div>
                </div>
            </li>
            
            <li className="notification-item unread">
                <div className="notification-icon chat">
                    <i className="fas fa-comment-dots"></i>
                </div>
                <div className="notification-content">
                    <div className="notification-title">
                        <span>New message from Sarah <span className="badge-unread"></span></span>
                        <span className="notification-time">25 min ago</span>
                    </div>
                    <p className="notification-message">
                        "Hi there! I have some questions about the project timeline. Are you available to chat?"
                    </p>
                    <div className="notification-actions">
                        <button className="btn btn-sm btn-primary">Reply</button>
                        <button className="btn btn-sm btn-outline-secondary">View Chat</button>
                    </div>
                </div>
            </li>
            
            <li className="notification-item">
                <div className="notification-icon email">
                    <i className="fas fa-envelope"></i>
                </div>
                <div className="notification-content">
                    <div className="notification-title">
                        <span>Weekly digest</span>
                        <span className="notification-time">2 hours ago</span>
                    </div>
                    <p className="notification-message">
                        Your weekly summary: 3 new projects matching your skills, 2 connection requests, and platform updates.
                    </p>
                    <div className="notification-actions">
                        <button className="btn btn-sm btn-outline-primary">View Digest</button>
                    </div>
                </div>
            </li>
            
            <li className="notification-item">
                <div className="notification-icon chat">
                    <i className="fas fa-comment-dots"></i>
                </div>
                <div className="notification-content">
                    <div className="notification-title">
                        <span>Michael joined the project chat</span>
                        <span className="notification-time">5 hours ago</span>
                    </div>
                    <p className="notification-message">
                        Michael Chen has joined the "Mobile App Development" group chat.
                    </p>
                    <div className="notification-actions">
                        <button className="btn btn-sm btn-outline-primary">Open Chat</button>
                    </div>
                </div>
            </li>
            
            <li className="notification-item">
                <div className="notification-icon">
                    <i className="fas fa-cog"></i>
                </div>
                <div className="notification-content">
                    <div className="notification-title">
                        <span>System maintenance scheduled</span>
                        <span className="notification-time">Yesterday</span>
                    </div>
                    <p className="notification-message">
                        Planned maintenance on June 15th from 2:00 AM to 4:00 AM UTC. The platform will be unavailable during this time.
                    </p>
                </div>
            </li>
        </ul>
        
        
    </div>
</div></>
}
export default NotificationPage;
