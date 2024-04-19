import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonBackButton, IonButtons } from '@ionic/react';
import { addCircleOutline, refreshOutline } from 'ionicons/icons';

const ClickCounter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>

        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>

      <IonContent fullscreen className="ion-padding" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ marginBottom: '20px' }}>
          <IonIcon icon={addCircleOutline} style={{ fontSize: '150px', color: 'var(--ion-color-primary)' }} onClick={incrementCounter} />
        </div>
        <p style={{ fontSize: '48px', marginBottom: '20px' }}>Counter: {counter}</p>
        <div style={{ display: 'flex' }}>
          <IonButton onClick={resetCounter} color="danger" style={{ marginRight: '10px' }}>
            <IonIcon icon={refreshOutline} slot="start" />
            Reset
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ClickCounter;
