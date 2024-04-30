import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonBadge
} from '@ionic/react';


//Custom CSS
import './Home.css';

//Ionic Icons
import { speedometerOutline,calculator,pencil, chatbubble, logoIonic, logoReact, logoFirebase, readerOutline} from 'ionicons/icons';

//Additional Routes
// import Click_counter from './Click_counter';


const cardData = [
  {
    title: 'Click Counter',
    icon: speedometerOutline,
    subtitle: 'Applet #1',
    link: '/clickcounter',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }

  },
  {
    title: 'Calculator',
    icon: calculator,
    subtitle: 'Applet #2',
    link: '/calculator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'To Do List',
    icon: pencil,
    subtitle: 'Applet #3',
    link: '/todolist',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'Quote Generator',
    icon: chatbubble,
    subtitle: 'Applet #4',
    link: '/quotesgenerator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'Notes',
    icon: readerOutline,
    subtitle: 'Applet #5',
    link: '/notes',
    tags: {
      tag1: logoIonic,
      tag2: logoReact, 
      tag3: logoFirebase 
    }
  }
  
];

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


  const Home: React.FC = () => {

    {/*Dynamic Search*/}
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
      <IonPage className="home-page">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader>
        {/*Dynamic Search*/}
        <>
          <IonSearchbar 
            value={searchTerm} 
            onIonInput={(e) => setSearchTerm(e.target.value ?? '')} 
          />
          
          {cardData
            .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((card, index) => (
              <IonCard key={index} href={card.link} id="card_body">
                <IonCardHeader>
                  <IonCardTitle>
                    <IonGrid>
                      <IonRow>
                        <IonCol push=".75">
                          <IonIcon className="home-card-icon" icon={card.icon} />
                        </IonCol>
                        <IonCol pull='3'>
                          <div className="home-card-title">{card.title}</div>
                          <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
          ))}
        </>
          </IonContent>
        </IonPage>
    );
  };
  

  //
  export default Home;

};

export default Home;

