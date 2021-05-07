import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';
import { persons } from './person.api';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiServerUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  public getPersonsByLocation(
    location: string
  ): Person[] /*Observable<Person[]>*/ {
    return persons;
    // return this.http.get<Person[]>(
    //   `${this.apiServerUrl}/person?location=${location}`
    // );
  }
}
