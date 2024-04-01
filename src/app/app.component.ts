import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = 'Orestis';

  person0: Person = {
    givenName: 'Orestis',
    surName: 'Apatzidis',
    age: 0x20,
    email: 'orestisphys@gmail.com',
    address: 'Athens, Greece'
  };

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'jdoe@example.com',
    address: 'New York, USA'
  };
}
