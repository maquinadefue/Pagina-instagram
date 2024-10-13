import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonText, IonInput, IonButton, IonRadioGroup, IonRadio, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonInput, IonButton, FormsModule, IonRadioGroup, IonRadio, IonItem, IonLabel], // Agregando todos los componentes que usas en el HTML
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permitir componentes personalizados como los de Ionic
})
export class HomePage {
  

 
}