import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import JobCards from './JobCards';
import { getGithubJobsRequest } from '../redux/githubJobs.actions';

import '../styles/home.scss';
import Loading from './elements/Loading';

export const Home: React.FC<any> = ({
  jobs,
  history,
  getGithubJobsRequest
}) => {

  console.log("props", jobs);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!jobs) {
      getGithubJobsRequest();
    } else {
      setLoading(false);
    }
  }, [jobs]);

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
            {loading && <Loading padding='p-5' margin='m-3' />}
            <div className="row">
              {jobs && <JobCards jobs={jobs} history={history} />}
            </div>
          </section>

        </div>
      </div>
    </div>

  );
}

const mapStateToProps = (state: any) => ({
  jobs: state.get("jobs")
});

const mapDispatchToProps = {
  getGithubJobsRequest,
};

export default connect(mapStateToProps as any, mapDispatchToProps)(Home);
