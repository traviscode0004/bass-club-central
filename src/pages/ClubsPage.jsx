import React from 'react';
//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
// images
import floydImage from '../img/floyd.jpg';
import teamImage from '../img/dscn0357_orig.jpg';
import mapImage from '../img/map.png';
function ClubsPage() {
  return (
    <div>
      <div className="container hold">
        <section className="addone">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col">
              <a
                href="http://www.anrdoezrs.net/jl65cy63y5LUVRTVVPLNPRNNOOT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="http://www.ftjcfx.com/o0104xjnbhf09A68AA4024622338"
                  alt="Subphantis"
                  border="0"
                />
              </a>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </section>

        <section className="section1">
          <div className="row">
            <div className="col col-sm-3">
              <div className="card bg-light mb-3" style={{ maxWidth: '15rem' }}>
                <img className="card-img-top" src={floydImage} alt="Floyd County Bass Anglers" />
              </div>
              <div className="card bg-light mb-3" style={{ maxWidth: '15rem' }}>
                <div className="card-header">Next Tournament</div>
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">Norman 03/14/19 6:00am</p>
                </div>
              </div>
            </div>

            <div className="col col-sm-6">
              <div className="card bg-light mb-3">
                <div className="card-header">Floyd Bass Club Points</div>
                <div className="card-body">
                  <h5 className="card-title">Current Standings</h5>
                  <table className="table table-sm test">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Member</th>
                        <th scope="col">Member</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Joe L</td>
                        <td>Tanner L</td>
                        <td>201</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Dennis H</td>
                        <td>Eric H</td>
                        <td>199</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Anthony W</td>
                        <td>Greg C</td>
                        <td>193</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card bg-light mb-3">
                <div className="card-header">Tournament Results</div>
                <img className="card-img-top" src={teamImage} alt="Decker and Decker take First Place" />
                <div className="card-body">
                  <h5 className="card-title">Decker and Decker take First Place</h5>
                  <p className="card-text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  </p>
                </div>
              </div>
            </div>

            <div className="col col-sm-3">
              <div className="card bg-light mb-3">
                <div className="card-header">Tournament Schedule</div>
                <div className="card-body">
                  <h5 className="card-title">2019 Schedule</h5>
                  <table className="table table-sm test">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Lake</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">03/09/19</th>
                        <td>Smith Mountain</td>
                      </tr>
                      <tr>
                        <th scope="row">03/23/19</th>
                        <td>Falls Lake</td>
                      </tr>
                      <tr>
                        <th scope="row">04/06/19</th>
                        <td>Claytor Lake</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card bg-light mb-3" style={{ maxWidth: '15rem' }}>
                <div className="card-header">Choose a Lake map</div>
                <img className="card-img-top" src={mapImage} alt="Kerr Lake" />
                <div className="card-body">
                  <h5 className="card-title">Kerr Lake</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ClubsPage;

