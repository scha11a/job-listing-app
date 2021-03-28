import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from './components/elements/Loading';
import JobView from './components/JobView';
import Layout from './components/Layout';
const Home = React.lazy(() => import('./components/Home'));

export default () => (
    <Layout>
        <React.Suspense fallback={<Loading padding='p-5' margin='m-3' />}>
            <Switch>
                <Route exact path='/' component={Home} history={history} />
                <Route path="/job-view" component={JobView} />
            </Switch>
        </React.Suspense>
    </Layout>
);