import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import {
  fileTrayFullOutline,
  personOutline,
  checkmarkDone,
} from 'ionicons/icons';
import './Home.css';
import CheckInOut from '../CheckInOut';
import Report from '../Report';
import Profile from '../Profile';
const Home: React.FC = () => {
  return (
      <IonTabs>
        <IonRouterOutlet>
          <Route path='/check-in' component={CheckInOut} exact={true} />
          <Route path='/report' component={Report} exact={true} />
          <Route path='/profile' component={Profile} />
          <Route
            path='/'
            render={() => <Redirect to='/check-in' />}
            exact={true}
          />
        </IonRouterOutlet>
        <IonTabBar slot='bottom' color='primary' className='no-border'>
          <IonTabButton tab='tab1' href='/check-in'>
            <IonIcon icon={checkmarkDone} />
            <IonLabel>Check In/Out</IonLabel>
          </IonTabButton>

          <IonTabButton tab='report' href='/report'>
            <IonIcon icon={fileTrayFullOutline} />
            <IonLabel>Reports</IonLabel>
          </IonTabButton>

          <IonTabButton tab='profile' href='/profile'>
            <IonIcon icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
  );
};

export default Home;
