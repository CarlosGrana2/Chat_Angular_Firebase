import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChatService } from './providers/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public cs: ChatService) {
    console.log( cs.usuario.nombre);
  }
}
