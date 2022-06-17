import { closeOutline } from 'ionicons/icons';
import { IonAccordion, IonAccordionGroup, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
  const [ showIonActionSheet, dismissIonActionSheet ] = useIonActionSheet();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ion-accordion-test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonAccordionGroup value='group1'>
            <IonAccordion value='group1'>
              <IonItem slot='header' lines='full'><IonLabel><h2>Group 1</h2></IonLabel></IonItem>
              <IonList slot='content'>
                {items.map((i: number) =>
                  <IonCard button key={`Group1_Item${i}`} onClick={() => {
                    showIonActionSheet({
                      buttons: [{
                        text: 'Cancel',
                        icon: closeOutline,
                        role: 'cancel',
                        handler: dismissIonActionSheet
                      }]
                    });
                  }}>
                    <IonCardHeader>
                      <IonCardTitle>Item {i}</IonCardTitle>
                    </IonCardHeader>
                  </IonCard>
                )}
              </IonList>
            </IonAccordion>
          </IonAccordionGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
