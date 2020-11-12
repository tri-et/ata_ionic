import React from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonTitle,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { TextField, Grid, Divider, Avatar } from '@material-ui/core';
import { refreshOutline, saveOutline } from 'ionicons/icons';
import ATAHeader from '../../components/header/ATAHeader';
import './Profile.css';

const Profile: React.FC = () => {
 
  
  return (
    <IonPage>
      <ATAHeader />
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader className='card-header'>
            <IonTitle color='primary' className='title-card-header'>
              User Profile
            </IonTitle>
          </IonCardHeader>
          <Divider />
          <IonCardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label='Display Name' variant='outlined' />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label='Photo Url' variant='outlined' />
              </Grid>
              <Grid container justify='center'>
                <Avatar className='img' src='assets/images/avatar.png'></Avatar>
              </Grid>
              <Grid container justify='center'>
                <IonButton
                  expand='full'
                  className='button-refesh'
                  shape='round'
                >
                  <IonIcon
                    className='icon-check'
                    icon={refreshOutline}
                  ></IonIcon>
                  Refesh
                </IonButton>
                <IonButton
                  expand='full'
                  className='button-refesh'
                  shape='round'
                >
                  <IonIcon className='icon-check' icon={saveOutline}></IonIcon>
                  Update
                </IonButton>
              </Grid>
            </Grid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
