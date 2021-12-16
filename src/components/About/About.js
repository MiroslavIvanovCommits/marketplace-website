import "./About.css";

const About = () => {
    return(
        <section className="white-background black" id="one">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center black">
              <h3 className="title">ABOUT <span className="themecolor">US</span></h3>
              <p className="a-slog">Our mission is to connect people and help them share the best deals they've found with other people. Thus saving your time and wallet for free!</p>
            </div>
          </div>
          <div className="gap">

          </div>

          <div className="row about-box">
            <div className="col-sm-4 text-center">
              <div className="margin-bottom">
                <i className="fa fa-users"></i>
                <h4>COMMUNITY</h4>
                <p className="black">We bring the community together and help it reach other amazing people.</p>
              </div>
            </div>
            <div className="col-sm-4 about-line text-center">
              <div className="margin-bottom">
                <i className="fa fa-comments"></i>
                <h4>SHARE YOUR INSIGHTS</h4>
                <p className="black">We are happy to offer you the opurtunity to share you amazing ideas and findings.</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="margin-bottom">
                <i className="fa fa-dollar"></i>
                <h4>FREE OF CHARGE</h4>
                <p className="black">We are proud to offer you our services for free as they always have and will be!</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
};

export default About;