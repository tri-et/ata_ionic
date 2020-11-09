import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './ATAHeader.css';
import {
  IonHeader,
  IonTitle,
  IonButtons,
  IonIcon,
  IonToolbar,
} from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';

const ATAHeader: React.FC = () => {
  const user = useContext(UserContext);
  return (
    <IonHeader className="ion-no-border" collapse="condense">
      <IonToolbar color='primary'>
        <div className='title'>Attendance Tracking</div>
        <IonButtons
          slot='end'
          onClick={() => {
            user.setIsLoggedIn(false);
          }}
        >
          <IonIcon slot='icon-only' icon={logOutOutline} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default ATAHeader;
