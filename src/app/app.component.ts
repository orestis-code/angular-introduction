import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = 'Orestis';

  person = {
    givenName: 'Orestis',
    surName: 'Apatzidis',
    age: 0x20,
    email: 'orestisphys@gmail.com'
  }
}
