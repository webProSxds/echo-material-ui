import '../../assets/css/job-post.css';

const AddJobPage = ()=>{
    
    return <><div className="container">
        <div className="profile-header p-4 mb-4">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                    <h2 className="mb-1">Add Job Description</h2>
                    <p>Let us assist you with guided AI input to create your job requirements effectively.</p>
                </div>

            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <div className="form-container">
                    
                    <form>
                        <div className="mb-3">
                            <label htmlFor="role" className="form-label">Role</label>
                            <input type="text" className="form-control" id="role" placeholder="Enter Role"/>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="jobTitle" className="form-label">Job Title</label>
                            <input type="text" className="form-control" id="jobTitle" placeholder="Enter job title (e.g., Frontend Developer)"/>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="jobDescription" className="form-label">Job Description</label>
                            <textarea className="form-control" id="jobDescription" rows={5} placeholder="Write a detailed job description..."></textarea>
                        </div>
                        
                        <div className="mb-4">
                            <label className="form-label">Interview Schedule Time</label>
                            <div className="date-time-container">
                                <div className="date-time-item">
                                    <label htmlFor="startDate" className="form-label">Date</label>
                                    <input type="date" className="form-control" id="startDate" placeholder="mm/dd/yyyy"/>
                                </div>
                                <div className="date-time-item">
                                    <label htmlFor="startTime" className="form-label">Start Time</label>
                                    <div className="time-input-group">
                                        <i className="bi bi-clock"></i>
                                        <input type="time" className="form-control" id="startTime" required/>
                                    </div>
                                </div>
                                <div className="date-time-item">
                                    <label htmlFor="endTime" className="form-label">End Time</label>
                                    <div className="time-input-group">
                                        <i className="bi bi-clock"></i>
                                        <input type="time" className="form-control" id="endTime" required/>
                                    </div>
                                </div>
                                <div className="date-time-item">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country">
                                        <option selected disabled>Select country</option>
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                        <option>Canada</option>
                                        <option>Australia</option>
                                        <option>India</option>
                                    </select>
                                </div>
                                <div className="date-time-item">
                                    <label htmlFor="timezone" className="form-label">Timezone</label>
                                    <select className="form-select" id="timezone">
                                        <option selected disabled>Select timezone</option>
                                        <option>GMT (Greenwich Mean Time)</option>
                                        <option>EST (Eastern Standard Time)</option>
                                        <option>CST (Central Standard Time)</option>
                                        <option>PST (Pacific Standard Time)</option>
                                        <option>IST (Indian Standard Time)</option>
                                    </select>
                                </div>
                            </div>
                            <a href="#">+ Add Interview Schedule</a>
                            
                           
                        </div>
                        
                        <div className="button-group d-flex justify-content-end">
                            <button type="button" className="btn btn-back">Back</button>
                            <button type="submit" className="btn btn-post">Post Requirement</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div></>
}
export default AddJobPage;
