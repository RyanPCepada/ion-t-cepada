// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton, IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

const Profile: React.FC = () => {
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
      {/* <img alt="" id="calculator" src="../src/assets/img/self_intro.gif" /> */}

      <IonRow>
        <IonCol size="4">
          <img alt="Silhouette of mountains" id="profile_pic" src="../src/assets/img/ARSY_CIRCLE_GREEN_PNG.png" />
        </IonCol>
        <IonCol size="8">
          <IonCardHeader>
            <IonCardTitle>Ryan P. Cepada</IonCardTitle>
            <IonCardSubtitle>NBSC-BSIT Student</IonCardSubtitle>
          </IonCardHeader>
        </IonCol>
      </IonRow>

      <IonCardContent>&#x1F64C; Let God Move &#x1F64C;</IonCardContent>


      <IonButton id="present-alert" expand="block" color="primary">Quick Facts</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Explore Quick Facts?"
        subHeader="Unlock valuable insights"
        message="Discover a wealth of information with Quick Facts."
        buttons={['Learn More']}
      ></IonAlert>

    <IonButton id="open-action-sheet" expand="block" color="light">Open Action Sheet</IonButton>
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

export default Profile;