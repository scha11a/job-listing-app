// ===============================================================================
// Imported Features (GithubJobs)
// *********************************************************
const logPrefix: string = '[GithubJobs.Action]:';

export const GET_GITHUB_JOBS_REQUEST = "GET_GITHUB_JOBS_REQUEST";
export const GET_GITHUB_JOBS_SUCCESS = "GET_GITHUB_JOBS_SUCCESS";
export const GET_GITHUB_JOBS_FAIL = "GET_GITHUB_JOBS_FAIL";
export const SET_JOB = "SET_JOB";
export const SET_LOCATION = "SET_LOCATION";
export const SET_LOCATION_KEYWORDS = "SET_LOCATION_KEYWORDS";
export const SET_JOB_KEYWORDS = "SET_JOB_KEYWORDS";
export const SET_DARK_THEME = "SET_DARK_THEME";


// *********************************************************
// *****                    Actions                    *****
// *********************************************************
export const getGithubJobsRequest = (payload: any) => {
    console.log(`${logPrefix} getGithubJobsRequest(). Payload param: `, payload);

    return {
        type: GET_GITHUB_JOBS_REQUEST,
        payload: payload
    };
};

export const getGithubJobsSuccess = (payload: any) => {
    console.log(`${logPrefix} GetGithubJobsSuccess(). Payload param: `, payload);

    return {
        type: GET_GITHUB_JOBS_SUCCESS,
        payload: payload
    };
};

export const getGithubJobsFail = (payload: any) => {
    console.log(`${logPrefix} getGithubJobsFail(). Payload param: `, payload);

    return {
        type: GET_GITHUB_JOBS_FAIL,
        payload: payload
    };
};

export const setJob = (payload: any) => {
    console.log(`${logPrefix} setJob(). Payload param: `, payload);
    return {
        type: SET_JOB,
        payload: payload
    };
};

export const setLocation = (payload: any) => {
    console.log(`${logPrefix} setLocation(). Payload param: `, payload);
    return {
        type: SET_LOCATION,
        payload: payload
    };
};

export const setLocationKeywords = (payload: any) => {
    console.log(`${logPrefix} setLocationKeywords(). Payload param: `, payload);
    return {
        type: SET_LOCATION_KEYWORDS,
        payload: payload
    };
};

export const setJobKeywords = (payload: any) => {
    console.log(`${logPrefix} setJobKeywords(). Payload param: `, payload);
    return {
        type: SET_JOB_KEYWORDS,
        payload: payload
    };
};

export const setDarkTheme = (payload: any) => {
    console.log(`${logPrefix} setDarkTheme(). Payload param: `, payload);
    return {
        type: SET_DARK_THEME,
        payload: payload
    };
};
