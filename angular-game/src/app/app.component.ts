import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-game';

  constructor(private firestore: Firestore) {
    console.log(firestore);
  }
}
