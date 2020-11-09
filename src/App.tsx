import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

interface IUserManager {
  setIsLoggedIn: Function;
}

const user: IUserManager = {
  setIsLoggedIn: () => {},
};
export const UserContext = React.createContext<IUserManager>(user);
const IonicApp: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useContext(UserContext);

  user.setIsLoggedIn = setIsLoggedIn;
  return (
    <IonApp>
      <IonReactRouter>
        <Route path='/login' component={Login} exact={true} />
        <Route path='/' component={isLoggedIn ? Home : Login} />
      </IonReactRouter>
    </IonApp>
  );
};
const App: React.FC = () => (
  <UserContext.Provider value={user}>
    <IonicApp />
  </UserContext.Provider>
);

export default App;
