import "../App.scss"

function SkillsSection() {
    return (
        <div className="section">
            <div className="section-flex">

                <div className="card">
                    <h3 className="card-name">Skills</h3>
                    <div className="card-main">

                        <div className="skill-main">
                            <div className="skill-name">
                                JS/HTML/CSS
                            </div>
                            <div className="skill-bar">
                                <div className="skill-bar-fill"></div>
                            </div>
                        </div>

                        <div className="skill-main">
                            <div className="skill-name">
                                JS/HTML/CSS
                            </div>
                            <div className="skill-bar">
                                <div className="skill-bar-fill"></div>
                            </div>
                        </div>

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
                    <h3>Education and expirience</h3>
                    <div className="stats-education">

                        <div className="box">
                            <span className="year">2019 - 2023</span>
                            <span className="place">
                                Lviv National University
                            </span> 
                            <div className="subject">
                                Computer Science Bachelor
                            </div> 
                        </div>
                        <div className="box">
                            <span className="year">2022</span>
                            <span className="place">
                                Binariks Angular courses
                            </span> 
                            <div className="subject">
                                Angular and aoao
                            </div> 
                        </div>
                        <div className="box">
                            <span className="year">2023 - now</span>
                            <span className="place">
                                Cherkassy National University
                            </span> 
                            <div className="subject">
                                Inj Prog Zab master
                            </div> 
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;