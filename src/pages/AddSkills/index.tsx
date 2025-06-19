import '../../assets/css/job-post.css';

const AddSkillsPage = ()=>{
    
    return <><div className="container">
        <div className="profile-header p-4 mb-4">
            <div className="row align-items-center">
                <div className="col-md-12 text-center text-md-start">
                    <h2 className="mb-1">Add Your Skills</h2>
                    <p>Enhance your profile by adding your skills. Our AI will help suggest relevant skills based on your experience.</p>
                </div>

            </div>
        </div>

   
            <div className="skill-card">
              
                <div className="mb-4">
                    <h5 className="mb-3">Category</h5>
                    <select className="form-select">
                        <option selected disabled>Select a category</option>
                        <option>Information Technology</option>
                        <option>Design & Creative</option>
                        <option>Sales & Marketing</option>
                        <option>Writing & Translation</option>
                        <option>Engineering & Architecture</option>
                        <option>Business & Finance</option>
                        <option>Other</option>
                    </select>
                </div>
                
                <div className="mb-4">
                    <h5 className="mb-3">Primary Skills</h5>
                    <div className="mb-3">
                        <div className="input-group">
                            <input type="text" className="form-control" id="primarySkillInput" placeholder="Add your primary skills"/>
                            <button className="btn btn-outline-secondary" type="button" id="addPrimarySkill">Add</button>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap mb-3" id="primarySkillsContainer">
                    </div>
                    <div className="ai-suggestion">
                        <div className="ai-suggestion-title"><i className="fas fa-robot me-2"></i>AI Suggestions</div>
                        <div>
                            <span className="suggested-skill">JavaScript</span>
                            <span className="suggested-skill">React</span>
                            <span className="suggested-skill">Node.js</span>
                            <span className="suggested-skill">Python</span>
                            <span className="suggested-skill">UI/UX Design</span>
                        </div>
                    </div>
                </div>
                
                <div className="mb-4">
                    <h5 className="mb-3">Secondary Skills</h5>
                    <div className="mb-3">
                        <div className="input-group">
                            <input type="text" className="form-control" id="secondarySkillInput" placeholder="Add your secondary skills"/>
                            <button className="btn btn-outline-secondary" type="button" id="addSecondarySkill">Add</button>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap mb-3" id="secondarySkillsContainer">
                    </div>
                    <div className="ai-suggestion">
                        <div className="ai-suggestion-title"><i className="fas fa-robot me-2"></i>AI Suggestions</div>
                        <div>
                            <span className="suggested-skill">Git</span>
                            <span className="suggested-skill">Docker</span>
                            <span className="suggested-skill">AWS</span>
                            <span className="suggested-skill">Agile</span>
                            <span className="suggested-skill">Project Management</span>
                        </div>
                    </div>
                </div>
                
                <div className="mb-4">
                    <h5 className="mb-3">Other Skills</h5>
                    <div className="mb-3">
                        <div className="input-group">
                            <input type="text" className="form-control" id="otherSkillInput" placeholder="Add other relevant skills" />
                            <button className="btn btn-outline-secondary" type="button" id="addOtherSkill">Add</button>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap mb-3" id="otherSkillsContainer">
                    </div>
                </div>

                <div className="mb-4">
                    <h5 className="mb-3">Upload Resume (optional)</h5>
                    <div className="mb-3">
                <div className="input-group">
                    <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                  </div>
                  </div>
                  </div>
                
                <hr className="my-4" />
                
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-secondary">
                        <i className="fas fa-arrow-left me-1"></i> Back
                    </button>
                    <button className="btn btn-accent">
                        Save Skills <i className="fas fa-check ms-1"></i>
                    </button>
                </div>
            </div>
  </div></>
}
export default AddSkillsPage;
