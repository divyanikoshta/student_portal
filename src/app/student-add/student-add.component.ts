import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import { StudentService } from "../student.service";
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(private router:Router,private fb: FormBuilder,
     private studentService:StudentService,
     private route: ActivatedRoute) { }
  
  semesterList=[1,2,3,4,5,6,7,8];
  dataId : number;
  genderList: string[] = ['Male','Feamle','Other'];
  branchList: string[] = ['Computer Science Engineering', 'IT', 'Mechanical Engineering', 'Electrical Engineering',
  'Electronics & Communication Engineering','Civil Engineering','Biotechnology Engineering','Robotics Engineering',
'Aeronautical Engineering'];
filteredOptions: Observable<string[]>;

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    semester:['', Validators.required],
    branch:['', Validators.required],
    gender:['', Validators.required],
    cgpa:['', [Validators.required, Validators.min(0), Validators.max(10)]],
    admissionDate:['', Validators.required]
  });

  std = {id:null,firstName: null, lastName: null, semester: null ,gender:null,branch:null,cgpa:null,admissionDate:null};


  ngOnInit() {
    this.filteredOptions = this.profileForm.get('branch').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.route.queryParams.subscribe(param => {
        if(param.id){
          this.dataId = param.id;
          this.getStudentById(this.dataId);
        }
      })

  }

  getStudentById(id:number){
    this.studentService.getStudentById(id).subscribe(data => {
      this.std =  data;
      this.std.admissionDate = new Date(this.std.admissionDate);
      console.log(data);
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.branchList.filter(option => option.toLowerCase().includes(filterValue));
  }

  goToList(){
    this.router.navigate(["/list"]);
  }

  onSubmit(): void {
    console.log("this.std--",this.std);
    if(!this.dataId){
      this.studentService.addStudent(this.std as any).subscribe(data => { this.goToList()});
    }else{
      this.studentService.updateStudent(this.std as any).subscribe(data => { this.goToList()});
    }
   // 
  }






}
