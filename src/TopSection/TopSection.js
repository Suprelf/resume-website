import "../App.scss"

function TopSection() {
    return (
        <div className="section">
            <div className="top">
                <div className="top-left">
                    <h1>Hi! I'm Oleh</h1>
                    <div>Begginer web dev and just a oaoaoa peson</div>
                </div>

                <div className="top-right">
                    <div className="img-accent">
                        <img width={"300px"} src={process.env.PUBLIC_URL + '/morda.jpg'} />
                    </div>
                </div>
            </div>



        </div>
    );
}

export default TopSection;