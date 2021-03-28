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
interface RequestParams {

};
export function* getGithubJobsGenerator(action: RequestParams) {
    console.log(`getGithubJobsGenerator`, action);

    try {
        const results = yield api.githubJobsAPI();
        console.log(`Results: `, results);

        if (results) {
            yield put(actions.getGithubJobsSuccess(results.data));
        } else {
            yield put(actions.getGithubJobsFail(results));
        }

    }
    catch (err) {
        console.error(err);

        yield put(actions.getGithubJobsFail(err));
    }
}

export default function* GithubJobsSagas() {
    console.log(`GithubJobsSagas(). Sagas initiated.`);

    yield takeLatest(actions.GET_GITHUB_JOBS_REQUEST, getGithubJobsGenerator);
}
