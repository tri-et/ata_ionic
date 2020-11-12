import React from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonDatetime,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { Grid, Box } from '@material-ui/core';
import { calendarOutline,logInOutline, logOutOutline } from 'ionicons/icons';
import ATAHeader from '../../components/header/ATAHeader';
import './Report.css';

const Report: React.FC = () => {
  const a = ['IN','OUT','IN','OUT','IN','OUT','IN','OUT','IN','OUT','IN','OUT'];
  return (
    <IonPage>
      <ATAHeader />
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader color='primary'>
            <Grid container justify='space-around'>
              <Grid item>
                <Grid
                  container
                  direction='row'
                  justify='center'
                  alignItems='center'
                >
                  <IonLabel className='label'>From</IonLabel>
                  <IonIcon icon={calendarOutline} />
                  <IonDatetime
                    className='date-time'
                    displayFormat='D-MM-YYYY'
                    value={Date()}
                  ></IonDatetime>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction='row'
                  justify='center'
                  alignItems='center'
                >
                  <IonLabel className='label'>To</IonLabel>
                  <IonIcon icon={calendarOutline} />
                  <IonDatetime
                    className='date-time'
                    displayFormat='D-MM-YYYY'
                    value={Date()}
                  ></IonDatetime>
                </Grid>
              </Grid>
            </Grid>
          </IonCardHeader>
          <IonCardContent>
            <Grid container>
              <Grid container direction='row' className='report-header'>
                <Box className='title-header'>TYPE</Box>
                <Box className='title-header'>DATE</Box>
                <Box className='title-header'>TIME</Box>
                <Box className='title-header' flexGrow={1}>
                  REASON
                </Box>
              </Grid>
              {a.map((i,index) => {
                return (
                  <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'
                    className='report-row'
                    key={index}
                  >
                    <Box className='content'>
                      <IonIcon color={i==='IN'?'primary':'danger'} className='icon' icon={i==='IN'?logInOutline:logOutOutline}></IonIcon>
                    </Box>
                    <Box className='content'>17-09-2020</Box>
                    <Box className='content'>19:45 PM</Box>
                    <Box className='content'>
                      forget check in forget check in
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Report;
