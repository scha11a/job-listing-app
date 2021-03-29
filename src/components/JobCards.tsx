import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setJob } from '../redux/githubJobs.actions';
import '../styles/home.scss';

interface JobCardsProps {
    jobs: Array<Job>;
    setJob: Function;
    loadMore?: number;
    history: any;
    darkTheme: boolean;
}

export interface Job {
    company?: string;
    company_logo?: any;
    company_url: string;
    created_at: string;
    description: string;
    how_to_apply: string;
    id: string;
    location: string;
    title: string;
    type: string;
    url: string;
}

export const JobCards: React.FC<JobCardsProps> = ({
    jobs,
    history,
    loadMore,
    setJob,
    darkTheme
}) => {

    const [cardLimit, setCardLimit] = useState<number>(12);

    useEffect(() => {
        if (loadMore) {
            setCardLimit(loadMore * 12);
        }
    }, [loadMore]);

    const timeDiff = (created_at: string) => {
        const createdTime = new Date(created_at);
        const currentTime = new Date();
        if (currentTime < createdTime) {
            currentTime.setDate(currentTime.getDate() + 1);
        }
        const diff = Number(currentTime) - Number(createdTime);
        var msec = diff;
        var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        return hh;
    };

    return <>
        {jobs.map((job, key) => {
            if (key < cardLimit) {
                return (
                    <div key={key} className="col-xl-3 col-sm-6 col-12 mt-5">
                        {job.company_logo && <img className="hat" src={job.company_logo} alt="hat" />}
                        <div className={classNames("row shadow-sm", { 'card': !darkTheme }, { 'card-dark': darkTheme })}>
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="align-self-center">
                                            <i className="icon-pencil primary font-large-2 float-left"></i>
                                        </div>
                                        <div className="media-body text-left">
                                            <p className="pt-3">{timeDiff(job.created_at)} hrs ago. {job.type}</p>
                                            <div className="text-decoration-none">
                                                <div className="h4 job-title" onClick={() => {
                                                    setJob(job);
                                                    history.push("/job-view")
                                                }}>{job.title}</div>
                                            </div>
                                            {job.company && <span>{job.company}</span>}
                                            <br />
                                            <p className="pt-4 mb-0 small">{job.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
        }
    </>;
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
    setJob,
};

export default connect(mapStateToProps as any, mapDispatchToProps)(JobCards);
