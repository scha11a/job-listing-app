import React, { useEffect } from 'react';
import '../styles/jobview.scss';
import Header from './Header';
import icon from "../styles/7274846.png";
import { connect } from 'react-redux';
import { Job } from './JobCards';
import { Redirect } from 'react-router-dom';
interface JobViewProps {
  jobSelected: Job
}

export const JobView: React.FC<JobViewProps> = ({
  jobSelected,
}) => {

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
                <img
                  src={icon}
                  alt="icon"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <div className="row p-3">
                  {jobSelected.company &&
                    <h3 className="col-lg-8 col-md-8 col-xs-12 card-title p-0">{jobSelected.company}</h3>
                  }
                  <a href={jobSelected.url} className="col-auto btn btn-outline-primary">Company Site</a>
                </div>

                <p className="card-text">
                  <div className="text-muted">{jobSelected.url}</div>
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
                  <li><a href="#" className="tag">HTML</a></li>
                  <li><a href="#" className="tag">CSS</a></li>
                  <li><a href="#" className="tag">JavaScript</a></li>
                </ul>
              </h3>
              <a href="#" className="col-auto btn btn-primary h-100">Apply now</a>
            </div>
            <p className="card-text">
              <h5 className="card-title">Company Introduction</h5>

              <p><strong>Write a short and catchy paragraph about your company.Make sure to provide information about the company’s culture, perks, and benefits. Mention office hours, remote working possibilities, and everything else you think of that makes your company interesting.</strong></p>

              <h5 id="job-description">Job Description</h5>

              <p>We are looking for an HTML5 developer who is motivated to combine the art of design with the art of programming. Responsibilities will include the translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.</p>

              <h5 id="responsibilities">Responsibilities</h5>

              <ul>
                <li>Develop new user-facing features</li>
                <li>Build reusable code and libraries for future use</li>
                <li>Ensure the technical feasibility of UI/UX designs</li>
                <li>Optimize application for maximum speed and scalability</li>
                <li>Assure that all user input is validated before submitting to back-end</li>
                <li>Collaborate with other team members and stakeholders</li>
                <li><strong>Add other responsibilities here that are relevant</strong></li>
              </ul>

              <h5 id="skills-and-qualifications">Skills and Qualifications</h5>

              <ul>
                <li>Proficient understanding of web markup, including HTML5 and CSS3</li>
                <li>Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS</li>
                <li>Strong knowledge of web standards</li>
                <li>Proficient understanding of cross-browser compatibility issues and ways to work around them</li>
                <li>Familiarity with differences in other HTML5 based views, such as ones in email clients</li>
                <li>Knack of adhering to best design practices</li>
                <li>Fair understanding of JavaScript programming and DOM manipulation</li>
                <li>Good understanding of SEO principles and ensuring that the application will adhere to them</li>
                <li>Proficient understanding of code versioning tools, such as <strong>Git / Mercurial / SVN</strong></li>
                <li><strong>Make sure to mention any framework, library, or any other technology related to your development stack </strong></li>
                <li><strong>List education level or certification you require </strong></li>
              </ul>
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
