import Axios from 'axios';

export function githubJobsAPI(payload: any) {
    console.log("githubJobsAPI response");

    if (payload && (payload.location || payload.locationKeywords
        || payload.jobKeywords || payload.fullTime)) {

        return Axios.get(`https://jobs.github.com/positions.json?${payload.location && payload.location.latitude && `lat=${payload.location.latitude}`}${payload.location && payload.location.longitude && `&&long=${payload.location.longitude}`}${payload.jobKeywords && `&&description=${payload.jobKeywords}`}${payload.locationKeywords && `&&location=${payload.locationKeywords}`}${payload.fullTime ? `&&full_time=${payload.fullTime}` : ""}`)
            .then(res => {
                return res;
            })
            .catch(err => {
                console.error(err);
                return err;
            });
    }

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