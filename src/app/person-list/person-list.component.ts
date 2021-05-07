import { Component } from '@angular/core';
import { Person } from '../person';

import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  public persons: Person[];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersonsByLocation('');
  }

  public getPersonsByLocation(location: string): void {
    this.persons = this.personService.getPersonsByLocation(
      location
    ); /*.subscribe(*/
    //   (response: Person[]) => {
  }

  // persons = persons;

  // share() {
  //   window.alert('The person has been shared!');
  // }
}
