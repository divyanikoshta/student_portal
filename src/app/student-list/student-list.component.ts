import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STUDENT } from "../mock-student";
import {StudentService} from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'gender' ,'semester', 'branch','admissionDate', 'action'];
  

  constructor(private router: Router, private studentService:StudentService){}
  dataSource = [];

  ngOnInit(){
    this.getHeroes();
  }

  addStudent(){
    this.router.navigate(["/add"]);
  }

  editStudent(data){
    this.router.navigate(["/add"],{
      queryParams :{id:data.id}
    });
  }

  getHeroes(): void {
    this.studentService.getStudent()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    });
  }

  deleteStudent(student: Student): void {
    this.dataSource = this.dataSource.filter(std => std !== student);
    this.studentService.deleteStudent (student.id).subscribe();
  }

}
