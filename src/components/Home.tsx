import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import JobCards from './JobCards';
import { getGithubJobsRequest, setJobKeywords, setLocation, setLocationKeywords } from '../redux/githubJobs.actions';

import '../styles/home.scss';
import Loading from './elements/Loading';

export const Home: React.FC<any> = ({
  jobs,
  history,
  getGithubJobsRequest,
  setLocation,
  setJobKeywords,
  setLocationKeywords,
  currentLocation,
  locationKeywords,
  jobKeywords,
  jobsError
}) => {

  console.log("props", jobs, history,
    getGithubJobsRequest,
    currentLocation,
    locationKeywords,
    jobKeywords,
    jobsError
  );

  const [loading, setLoading] = useState<boolean>(true);
  const [loadMore, setLoadMore] = useState<number>(1);
  const [fullTime, setFullTime] = useState<boolean>(false);

  const handleCheckBox = (event: any) => {
    setFullTime(event.target.checked);
  }

  useEffect(() => {
    if (!jobs) {
      getGithubJobsRequest();
    } else {
      setLoading(false);
    }
  }, [jobs]);

  const submitHandler = () => {
    const data = {
      locationKeywords: locationKeywords,
      jobKeywords: jobKeywords,
      fullTime: fullTime
    };
    setLoading(true);
    getGithubJobsRequest(data);
    console.log("request data:", data);
  };

  const submitAllHandler = () => {
    const data = {
    };
    setLoading(true);
    getGithubJobsRequest(data);
    console.log("request data:", data);
  };

  const jobKeywordsHandler = (event: any) => {
    setJobKeywords(event.target.value);
  };

  const locationKeywordsHandler = (event: any) => {
    setLocationKeywords(event.target.value);
  };

  const position = async () => {
    setLoading(true);
    await navigator.geolocation.getCurrentPosition(
      position => setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }),
      err => console.log(err)
    );
  }

  useEffect(() => {
    if (jobsError) {
      setLoading(false);
    }
  }, [jobsError]);

  useEffect(() => {
    if (currentLocation) {
      getGithubJobsRequest({ location: currentLocation });
      console.log("Location:", currentLocation);
    }
  }, [currentLocation]);

  return (
    <div className="App">
      <div className="home">
        <div className="grey-bg container-fluid pb-5">
          <Header />
          <section className="search-sec container">
            <div className="row card">
              <div className="col-lg-12 p-3">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <input type="text" className="form-control search-slt"
                      onChange={jobKeywordsHandler}
                      placeholder="Filter by Title, Companies, expertise..." />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="row">
                      <input type="text" className="col-10 form-control search-slt"
                        onChange={locationKeywordsHandler}
                        placeholder="Filter by location..." />
                      <div className="col-auto location-image" onClick={position}>
                      </div>
                    </div>

                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <input className="full-time-checkbox" type="checkbox" name="fullTime"
                      onChange={handleCheckBox} />
                    <label className="px-2">Full Time only</label>
                    <button type="submit" className="btn btn-primary wrn-btn mx-3"
                      onSubmit={submitHandler}
                      onClick={submitHandler}
                    >Search</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container btn-link pt-3 float-right search-all" onClick={submitAllHandler}>All results</div>
          <section className="container">
            {loading && <Loading padding='p-5' margin='m-3' />}
            <div className="row">
              {!jobsError && jobs && <JobCards jobs={jobs} history={history} loadMore={loadMore} />}
              {jobsError &&
                <div className="row mx-auto">No search results found, please retry</div>
              }
            </div>
            {!jobsError && jobs && jobs.length > 12 && <div className="row p-5">
              <button className="btn btn-primary mx-auto"
                onClick={() => setLoadMore(loadMore + 1)}>
                Load More
              </button>
            </div>}
          </section>

        </div>
      </div>
    </div>

  );
}

const mapStateToProps = (state: any) => ({
  jobs: state.get("jobs"),
  currentLocation: state.get("currentLocation"),
  locationKeywords: state.get("locationKeywords"),
  jobKeywords: state.get("jobKeywords"),
  jobsError: state.get("jobsError")
});

const mapDispatchToProps = {
  getGithubJobsRequest,
  setJobKeywords,
  setLocationKeywords,
  setLocation
};

export default connect(mapStateToProps as any, mapDispatchToProps)(Home);
