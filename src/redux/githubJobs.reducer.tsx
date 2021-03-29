// ===============================================================================
// Libs
import { Map as iMap } from 'immutable';

// ===============================================================================
// Imported Features (ppj)
import * as actions from './githubJobs.actions';

/* tslint:disable: newline-before-return */
// ********************************************************
const logPrefix: string = '[GithubJobs.Reducer]:';

const initialState: iMap<string, {}> = iMap();

// *********************************************************
// *****                    Tyees                      *****
// *********************************************************
type GithubJobsPayload = any;

// *********************************************************
// *****                    Reducer                    *****
// *********************************************************
export default (state: iMap<string, {}> = initialState, action: any) => {

    const { type, payload } = action;

    const fn = `${logPrefix} GithubJobs()`;

    switch (type) {
        case actions.GET_GITHUB_JOBS_SUCCESS:
            console.log(`${fn}. Reducer: %s.  Pl: `, actions.GET_GITHUB_JOBS_SUCCESS, payload);
            return state.set('jobs', payload);

        case actions.GET_GITHUB_JOBS_REQUEST:
            console.log(`${fn}. Reducer: %s.  Pl: `, actions.GET_GITHUB_JOBS_REQUEST, payload);

        case actions.GET_GITHUB_JOBS_FAIL:
            console.log(`${fn}. Reducer: %s.  Pl: `, actions.GET_GITHUB_JOBS_FAIL, payload);
            return state.set('jobsError', payload);

        case actions.SET_JOB:
            console.log(`${fn}. Reducer: %s.  Pl: `, actions.SET_JOB, payload);
            return state.set('jobSelected', payload);

        case actions.SET_LOCATION:
            console.log(`${fn}. Reducer: %s.  Pl: `, actions.SET_LOCATION, payload);
            return state.set('currentLocation', payload);

        case actions.SET_LOCATION_KEYWORDS:
            console.log(`${fn}. Reducer: %s.  Pl: `, actions.SET_LOCATION_KEYWORDS, payload);
            return state.set('locationKeywords', payload);

        case actions.SET_JOB_KEYWORDS:
            console.log(`${fn}. Reducer: %s.  Pl: `, actions.SET_JOB_KEYWORDS, payload);
            return state.set('jobKeywords', payload);

        case actions.SET_DARK_THEME:
            console.log(`${fn}. Reducer: %s.  Pl: `, actions.SET_DARK_THEME, payload);
            return state.set('darkTheme', payload);

        default:
            return state;
    }
};
