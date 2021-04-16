import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  private studentListUrl = 'api/student';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentListUrl);
      
  }

  deleteStudent(id: number): Observable<Student> {
    const url = `${this.studentListUrl}/${id}`;
    console.log(url);
    return this.http.delete<Student>(url,this.httpOptions);
  }

  addStudent(student: any): Observable<Student> {
    return this.http.post<Student>(this.studentListUrl, student, this.httpOptions);
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.studentListUrl, student, this.httpOptions);
  }

  getStudentById(id: number): Observable<Student> {
    const url = `${this.studentListUrl}/${id}`;
    return this.http.get<Student>(url);
  }
}
