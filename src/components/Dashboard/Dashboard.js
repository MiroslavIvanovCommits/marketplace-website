import "./Dashboard.css";

const Dashboard = () => {
    return(
        <section className="main-heading" id="home">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="main-heading-content col-md-12 col-sm-12 text-center">
                <h1 className="main-heading-title">The best deals</h1>
                <p className="main-heading-text">The best clothing deals are here! Check them out, like, comment and share the latest amazing offers.</p>
                <p className="main-heading-text">Join our community and help everyone to get a great deal!</p>
                <div className="button-bar">
                  <a href="#" className="button button-custom theme_background_color">Get Started</a>
                  <a href="#" className="button button-custom-outline">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
};

export default Dashboard;