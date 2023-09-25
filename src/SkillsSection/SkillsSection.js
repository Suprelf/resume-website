import "../App.scss"

function SkillsSection() {
    return (
        <div className="section">
            <div className="section-flex">

                <div className="card">
                    <h3 className="card-name" id="card-name-left">Skills</h3>
                    <div className="card-main" id="skills-scroll">

                        <div className="skill-main">
                            <div className="skill-name">
                                JS/HTML/CSS
                            </div>
                            <div className="skill-bar">
                                <div className="skill-bar-fill"></div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="card borderRight">
                    <h3 className="card-name">Education and expirience</h3>
                    <div className="card-main" id="exp-scroll">

                        <div className="exp-main">
                            <div className="exp-header">
                                <div className="exp-year">2019 - 2023</div>
                                <div className="exp-divider">-</div>
                                <div className="exp-place">
                                    Lviv National University
                                </div>
                            </div>

                            <div className="exp-info">
                                Computer Science Bachelor
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;