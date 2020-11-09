import React from 'react';
import {
  IonContent,
  IonPage,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ATAHeader from '../components/header/ATAHeader';
import './CheckInOut.css';

const CheckInOut: React.FC = () => {
  return (
    <IonPage>
      <ATAHeader></ATAHeader>
      <IonContent fullscreen>
        <ExploreContainer name='Tab 1 page' />
      </IonContent>
    </IonPage>
  );
};

export default CheckInOut;
