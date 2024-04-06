import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {

  person0: Person = {
    givenName: 'Orestis',
    surName: 'Apatzidis',
    age: 0x20,
    email: 'orestisphys@gmail.com',
    address: 'Athens, Greece'
  };

  person1: Person = {
    givenName: 'Simos',
    surName: 'Panagiotoglou',
    age: 0x25,
    email: 'sp@example.com',
    address: 'New York, USA'
  };

}
