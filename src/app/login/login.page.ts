import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import {  Router, } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonList, IonItem, IonInput, IonButton]
})
export class LoginPage implements OnInit {

  constructor(private router: Router
  ) { }
    
  ngOnInit() {
  }
OnclickIngresar() {
  this.router.navigate(['/home']);
}

}
