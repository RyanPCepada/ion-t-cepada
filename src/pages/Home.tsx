import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import { pulseOutline, calculatorOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  const goToClickCounter = () => {
    history.push('/click_counter');
  };

  const goToCalculator = () => {
    history.push('/calculator');
  };

  const goToTodolist = () => {
    history.push('/todolist');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <hr />
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="ion-text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <div> {/* Centering content */}

            <IonCard id="card1" onClick={goToClickCounter} style={{ width: '350px', cursor: 'pointer' }}>
              <IonCardContent style={{ height: '70px', fontSize: '30px', display: 'flex', alignItems: 'center', padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '20%', backgroundColor: 'var(--ion-color-light)', padding: 0 }}>
                  {/* <IonIcon icon={pulseOutline} slot="start" /> */}
                  <img alt="" id="click_counter" src="../src/assets/img/clickcounter_gif.gif" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '80%', backgroundColor: 'var(--ion-color-primary)', color: 'white', padding: 0 }}>
                  Click Counter
                </div>
              </IonCardContent>
            </IonCard>

            <IonCard id="card2" onClick={goToCalculator} style={{ width: '350px', cursor: 'pointer' }}>
              <IonCardContent style={{ height: '70px', fontSize: '30px', display: 'flex', alignItems: 'center', padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '20%', backgroundColor: 'var(--ion-color-light)', padding: 0 }}>
                  {/* <IonIcon icon={calculatorOutline} slot="start" /> */}
                  <img alt="" id="calculator" src="../src/assets/img/calculator_gif.gif" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '80%', backgroundColor: 'var(--ion-color-secondary)', color: 'white', padding: 0 }}>
                  Calculator
                </div>
              </IonCardContent>
            </IonCard>

            
            <IonCard id="card2" onClick={goToTodolist} style={{ width: '350px', cursor: 'pointer' }}>
              <IonCardContent style={{ height: '70px', fontSize: '30px', display: 'flex', alignItems: 'center', padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '20%', backgroundColor: 'var(--ion-color-light)', padding: 0 }}>
                  <img alt="" id="todolist" src="../src/assets/img/todolist_gif.gif" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '80%', backgroundColor: 'var(--ion-color-success)', color: 'white', padding: 0 }}>
                  Todo List
                </div>
              </IonCardContent>
            </IonCard>

            <IonCard id="card4" style={{ width: '350px', cursor: 'pointer' }}>
              <IonCardContent style={{ height: '70px', fontSize: '30px', display: 'flex', alignItems: 'center', padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '20%', backgroundColor: 'var(--ion-color-light)', padding: 0 }}>
                  <IonIcon slot="start" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '80%', backgroundColor: 'var(--ion-color-warning)', color: 'white', padding: 0 }}>
                  
                </div>
              </IonCardContent>
            </IonCard>


            
          </div>
        </div>
      </IonContent>

    </IonPage>
  );
  
};

export default Home;
