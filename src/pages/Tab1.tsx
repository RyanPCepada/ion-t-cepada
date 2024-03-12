import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton, IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        
    <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/avatar.jpg" />
        <IonCardHeader>
          <IonCardTitle>Ryan P. Cepada</IonCardTitle>
           <IonCardSubtitle>NBSC-BSIT Student</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>&#x1F64C; Let God Move &#x1F64C;</IonCardContent>


      <IonButton id="present-alert" expand="block" color="primary">Quick Facts</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Would you like to explore Quick Facts?"
        subHeader="Unlock valuable insights"
        message="Discover a wealth of information with Quick Facts."
        buttons={['Learn More']}
      ></IonAlert>

<IonButton id="open-action-sheet" expand="block" color="primary">Open Action Sheet</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </IonCard>
        </IonContent>
      </IonPage>
  );
};

export default Tab1;