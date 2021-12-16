import "./Stats.css";

const Stats = () => {
    return(
        <section className="our-stats" id="five">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="our-stats-box text-center">
                <div className="our-stat-icon">
                  <span className="fa fa-ge"></span>
                </div>
                <div className="our-stat-info">
                  <span className="stats" data- from="4763904" data-to="4764504" data-speed="5000"
                    data-refresh-interval="50"></span>

                  <h5>Total Downloaded</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="our-stats-box text-center">
                <div className="our-stat-icon">
                  <span className="fa fa-git-square"></span>
                </div>
                <div className="our-stat-info">
                  <span className="stats" data- from="1" data-to="504" data-speed="5000"
                    data-refresh-interval="50"></span>

                  <h5>Editors Supported</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="our-stats-box text-center">
                <div className="our-stat-icon">
                  <span className="fa fa-globe"></span>
                </div>
                <div className="our-stat-info">
                  <span className="stats" data- from="1" data-to="359" data-speed="5000"
                    data-refresh-interval="50"></span>

                  <h5>Languages Detected</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="our-stats-box text-center">
                <div className="our-stat-icon">
                  <span className="fa fa-gears"></span>
                </div>
                <div className="our-stat-info">
                  <span className="stats" data- from="3500" data-to="5000" data-speed="5000"
                    data-refresh-interval="50"></span>

                  <h5>Happy Clients</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Stats;