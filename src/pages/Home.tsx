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
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <hr />
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <div className="ion-text-center"> {/* Centering content */}
          <IonCard onClick={goToClickCounter} style={{ width: '350px', cursor: 'pointer' }} color="primary">
            <IonCardContent style={{ fontSize: '30px' }}>
              <IonIcon icon={pulseOutline} slot="start" />
              Click Counter
            </IonCardContent>
          </IonCard>
  
  
          <IonCard onClick={goToCalculator} style={{ width: '350px', cursor: 'pointer' }} color="primary">
            <IonCardContent style={{ fontSize: '30px' }}>
              <IonIcon icon={calculatorOutline} slot="start" />
              Calculator
            </IonCardContent>
          </IonCard>
          
          <IonCard style={{ width: '350px' }} color="primary">
            <IonCardContent style={{ fontSize: '30px' }}>
              Blank
            </IonCardContent>
          </IonCard>
  
          <IonCard style={{ width: '350px' }} color="primary">
            <IonCardContent style={{ fontSize: '30px' }}>
              Blank
            </IonCardContent>
          </IonCard>
        </div>

      <IonContent fullscreen>
        {/* Post Section */}
        <IonList>
          {/* Post Status */}
          <IonItem>
            <IonAvatar slot="start">
              <img src="../src/assets/img/ARSY_CIRCLE_GREEN_PNG.png" alt="profile" />
            </IonAvatar>
            <IonTextarea auto-grow placeholder="What's on your mind?" />
          </IonItem>
          {/* End Post Status */}

          {/* Add more posts here */}

        </IonList>

        {/* Photos, Videos, and Reels Section */}
        <IonFooter>
          <IonToolbar>
            <IonButton color="primary" slot="start">
              <IonIcon icon={camera} />
              <IonText>Photos</IonText>
            </IonButton>
            <IonButton color="primary" slot="start">
              <IonIcon icon={videocam} />
              <IonText>Videos</IonText>
            </IonButton>
            <IonButton color="primary" slot="start">
              <IonIcon icon={albums} />
              <IonText>Reels</IonText>
            </IonButton>
          </IonToolbar>

          <IonToolbar color="success">
            <img src="../src/assets/img/ARSY_CIRCLE_GREEN_PNG.png" alt="profile" />
            <IonText style={{ textAlign: 'center' }}>
              I am Ryan P. Cepada and this is my Home page
            </IonText>

          </IonToolbar>

        </IonFooter>


      </IonContent>
    </IonPage>
  );
  
};

export default Home;
