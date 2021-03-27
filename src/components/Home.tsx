import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import JobView from "./JobView";
import Header from './Header';

import '../styles/home.scss';
class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="home">
          <div className="grey-bg container-fluid pb-5">
            <Header />
            <section className="search-sec container">
              <form action="#" method="post">
                <div className="row card">
                  <div className="col-lg-12 p-3">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <input type="text" className="form-control search-slt" placeholder="Filter by Title, Companies, expertise..." />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <input type="text" className="form-control search-slt" placeholder="Filter by location..." />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <input className="full-time-checkbox" type="checkbox" name="fullTime" />
                        <label className="px-2">Full Time only</label>
                        <button type="button" className="btn btn-primary wrn-btn mx-3">Search</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>

            <section className="container">
              <div className="row">
                <div className="col-xl-3 col-sm-6 col-12 mt-5">
                  <img className="hat" src="https://via.placeholder.com/50" alt="hat" />
                  <div className="card">
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex">
                          <div className="align-self-center">
                            <i className="icon-pencil primary font-large-2 float-left"></i>
                          </div>
                          <div className="media-body text-left">
                            <p className="pt-3">5hr ago . Full time</p>
                            <Link className="text-decoration-none" to="/job-view">
                              <h3>Software Engineer</h3>
                            </Link>
                            <span>Company Inc.</span>
                            <br />
                            <p className="pt-4 mb-0">New York . Hyderabad</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12 mt-5">
                  <img className="hat" src="https://via.placeholder.com/50" alt="hat" />
                  <div className="card">
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex">
                          <div className="align-self-center">
                            <i className="icon-pencil primary font-large-2 float-left"></i>
                          </div>
                          <div className="media-body text-left">
                            <p className="pt-3">5hr ago . Full time</p>
                            <h3>Senior Software Engineer</h3>
                            <span>Company Inc.</span>
                            <br />
                            <p className="pt-4 mb-0">New York . Hyderabad</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

    );
  }
}

export default Home;
