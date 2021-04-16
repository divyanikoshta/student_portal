import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const student = [
      {id: 1, firstName: 'John', lastName: "Doe",semester: 3, gender:"Male", branch: "Civil Engineering",cgpa:9,admissionDate:1618514912169},
      {id: 2, firstName: 'Ron', lastName: "Weasley",semester: 3, gender:"Male", branch: "Mechanical Engineering",cgpa:8,admissionDate:1618514912169},
      {id: 3, firstName: 'Hermione', lastName: "Granger", semester: 2, gender:"Female", branch: "Computer Science Engineering",cgpa:7,admissionDate:1618514912169},
      {id: 4, firstName: 'Albus', lastName: "Dumbledore",  semester: 6, gender:"Male", branch: "Aeronautical Engineering",cgpa:6,admissionDate:1618514912169}
    ];
    return {student};
  }
}
