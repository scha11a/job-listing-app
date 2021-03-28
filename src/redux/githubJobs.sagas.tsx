// ===============================================================================
// Libs
import { put, takeLatest } from '@redux-saga/core/effects';

// ===============================================================================
// API
import * as api from '../services/githubJobs.api';

// ===============================================================================
// Imported Features (PPJ)
import * as actions from './githubJobs.actions';

// *********************************************************
// *****                  Redux Sagas                  *****
// *********************************************************
export function* getGithubJobsGenerator(action: any) {
    console.log(`getGithubJobsGenerator`, action);

    try {
        yield put(actions.getGithubJobsFail(false));
        const results = yield api.githubJobsAPI(action.payload);
        console.log(`Results: `, results);

        if (results && results.data && results.data.length > 0) {
            yield put(actions.getGithubJobsSuccess(results.data));
        } else if (results.data && results.data.length === 0) {
            yield put(actions.getGithubJobsFail(true));
        }

    }
    catch (err) {
        console.error(err);

        yield put(actions.getGithubJobsFail(true));
    }
}

export default function* GithubJobsSagas() {
    console.log(`GithubJobsSagas(). Sagas initiated.`);

    yield takeLatest(actions.GET_GITHUB_JOBS_REQUEST, getGithubJobsGenerator);
}
