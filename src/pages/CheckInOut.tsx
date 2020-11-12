import React from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonButton,
  IonLabel,
  IonIcon,
  IonDatetime,
} from '@ionic/react';
import { Grid } from '@material-ui/core';
import ATAHeader from '../components/header/ATAHeader';
import ATAClock from '../components/clock/ATAClock';
import { logInOutline, logOutOutline } from 'ionicons/icons';
import './CheckInOut.css';

const CheckInOut: React.FC = () => {
  var date = new Date();
  return (
    <IonPage>
      <ATAHeader></ATAHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent className='card-content'>
            <Grid container justify='center'>
              <Grid
                container
                direction='column'
                alignItems='center'
                className='margin-bottom'
              >
                <ATAClock />
                <IonLabel color='primary' className='date'>
                  <IonDatetime
                    displayFormat='D - MMM - YYYY'
                    value={date.toISOString()}
                  ></IonDatetime>
                </IonLabel>
              </Grid>
              <IonButton expand='full' className='button-check' shape='round'>
                <IonIcon className='icon-check' icon={logInOutline}></IonIcon>
                Check In
              </IonButton>
              <IonButton
                expand='full'
                className='button-check'
                shape='round'
                disabled={true}
              >
                <IonIcon className='icon-check' icon={logOutOutline}></IonIcon>
                Check Out
              </IonButton>
            </Grid>
            <IonLabel color='primary'>Please proceed to Check In</IonLabel>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CheckInOut;
