import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const student = [
      {id: 1, firstName: 'Hydrogen', lastName: "Hydrogen",semester: 3, gender:"Male", branch: "Civil Engineering",cgpa:90,admissionDate:1618514912169},
      {id: 1, firstName: 'Hydrogen', lastName: "Hydrogen",semester: 3, gender:"Male", branch: "Civil Engineering",cgpa:90,admissionDate:1618514912169},
      {id: 2, firstName: 'Helium', lastName: "Hydrogen", semester: 2, gender:"Male", branch: "Civil Engineering",cgpa:90,admissionDate:1618514912169},
      {id: 3, firstName: 'Lithium', lastName: "Hydrogen",  semester: 6, gender:"Male", branch: "Civil Engineering",cgpa:90,admissionDate:1618514912169}
    ];
    return {student};
  }
}