import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';
import githubJobsReducer from './redux/githubJobs.reducer';
import createSagaMiddleware from '@redux-saga/core';
import GithubJobsSagas from './redux/githubJobs.sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    githubJobsReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(GithubJobsSagas)

ReactDOM.render(<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>, document.getElementById('root'));
serviceWorker.register();