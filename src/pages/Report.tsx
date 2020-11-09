import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ATAHeader from '../components/header/ATAHeader';
import './Report.css';

const Report: React.FC = () => {
  return (
    <IonPage>
      <ATAHeader />
      <IonContent fullscreen>
        <ExploreContainer name='Tab 2 page' />
      </IonContent>
    </IonPage>
  );
};

export default Report;
