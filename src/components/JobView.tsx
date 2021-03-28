import React, { useEffect } from 'react';
import '../styles/jobview.scss';
import Header from './Header';
import { connect } from 'react-redux';
import { Job } from './JobCards';
import { Link, Redirect } from 'react-router-dom';
interface JobViewProps {
  jobSelected: Job
}

export const JobView: React.FC<JobViewProps> = ({
  jobSelected,
}) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  if (!jobSelected) {
    return <Redirect exact to="/" />;
  }

  return <>
    <div className="job-view">
      <div className="container-fluid pb-5">
        <Header />
      </div>
      <section className="container job-view-card">
        <div className="card mb-3 w-75 mx-auto">
          <div className="row g-0">
            <div className="col-md-3">
              <div className="mh-100">
                {jobSelected.company_logo && <img
                  src={jobSelected.company_logo}
                  alt="company-logo"
                  className="img-fluid company-logo"
                />}
              </div>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <div className="row p-3">
                  {jobSelected.company &&
                    <h3 className="col-lg-8 col-md-8 col-xs-12 card-title p-0">{jobSelected.company}</h3>
                  }
                  <a href={jobSelected.company_url ? jobSelected.company_url : jobSelected.url} target="_blank" rel="noopener noreferrer" className="col-auto btn btn-outline-primary">Company Site</a>
                </div>

                <p className="card-text">
                  <Link to={jobSelected.url} style={{ textDecoration: 'none', color: "black" }} className="text-muted">{jobSelected.url}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-75 mx-auto">
          <div className="card-body p-5">
            <div className="row p-3">
              <h3 className="col-lg-9 col-md-9 col-xs-12 card-title p-0">
                <span>{jobSelected.title}</span>
                <ul className="tags">
                  <li><a href="#" className="tag">{jobSelected.company}</a></li>
                </ul>
              </h3>
              <a href={jobSelected.company_url ? jobSelected.company_url : jobSelected.url} target="_blank" rel="noopener noreferrer" className="col-auto btn btn-primary h-100">Apply now</a>
            </div>
            <p className="card-text" dangerouslySetInnerHTML={{ __html: jobSelected.description }}>
            </p>
          </div>
        </div>
        <div className="card w-75 mx-auto mt-3">
          <div className="card-body p-5">
            <p className="card-text" dangerouslySetInnerHTML={{ __html: jobSelected.how_to_apply }}>
            </p>
          </div>
        </div>
      </section>
    </div>
  </>;
}

const mapStateToProps = (state: any) => ({
  jobSelected: state.get("jobSelected")
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps as any, mapDispatchToProps)(JobView);
