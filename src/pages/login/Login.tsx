import { IonContent, IonPage, IonButton } from '@ionic/react';
import { Box, Grid, OutlinedInput, InputAdornment } from '@material-ui/core';
import { PersonOutline, LockOutlined } from '@material-ui/icons';
import React, { useContext } from 'react';
import './Login.css';
import { UserContext } from '../../App';

const Login: React.FC = () => {
  const user = useContext(UserContext);
  return (
    <IonPage>
      <IonContent>
        <Box flexDirection='column' display='flex' className='login'>
          <Box className='header'>Attendance</Box>
          <Box className='footer'>
            <Grid container direction='column' alignItems='stretch' spacing={1}>
              <Grid item>
                <label>Email</label>
              </Grid>
              <Grid item>
                <OutlinedInput
                  fullWidth
                  className='textField'
                  startAdornment={
                    <InputAdornment position='start'>
                      <PersonOutline />
                    </InputAdornment>
                  }
                  labelWidth={0}
                />
              </Grid>
            </Grid>
            <br></br>
            <Grid container direction='column' alignItems='stretch' spacing={1}>
              <Grid item>
                <label>Password</label>
              </Grid>
              <Grid item>
                <OutlinedInput
                  type='password'
                  fullWidth
                  className='textField'
                  startAdornment={
                    <InputAdornment position='start'>
                      <LockOutlined />
                    </InputAdornment>
                  }
                  labelWidth={0}
                />
              </Grid>
            </Grid>
            <br />
            <IonButton
              expand='full'
              className='button'
              shape='round'
              onClick={() => {
                user.setIsLoggedIn(true);
              }}
            >
              Sign In
            </IonButton>
            <IonButton
              expand='full'
              fill='outline'
              className='button'
              shape='round'
              href='/tab3'
            >
              Sign Up
            </IonButton>
          </Box>
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Login;
