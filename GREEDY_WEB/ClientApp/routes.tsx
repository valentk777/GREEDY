import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Shared/Layout';
import { PhotographPage } from './components/Photograph page/PhotographPage';
import { AllUserItems } from './components/All items page/AllUserItems';
import { Authorization } from './components/Shared/Authorization';
import { UserSettings } from './components/User settings page/UserSettings';
import { StatisticsPage } from './components/Statistics page/StatisticsPage';
import { ServiceWorker } from './components/Shared/ServiceWorker';
import { DatabaseManager } from './components/Shared/DatabaseManager';
import { MapPage } from './components/Map page/MapPage';

export const routes =
    (<Layout>
        <Authorization>
            <Route path='/' component={ServiceWorker} />
            <Route path='/' component={DatabaseManager} />
            <Route exact path='/' component={PhotographPage} />
            <Route path='/fetchdata' component={AllUserItems} />
            <Route path='/user' component={UserSettings} />
            <Route path='/statistics' component={StatisticsPage} />
            <Route path='/map' component={MapPage} />
        </Authorization>
    </Layout>);