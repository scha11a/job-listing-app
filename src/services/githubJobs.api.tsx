import Axios from 'axios';

export function githubJobsAPI() {
    console.log("githubJobsAPI response");

    return Axios.get("https://jobs.github.com/positions.json")
        .then(res => {
            return res;
        })
        .catch(err => {
            console.error(err);
            return err;
        });

};

export default githubJobsAPI;