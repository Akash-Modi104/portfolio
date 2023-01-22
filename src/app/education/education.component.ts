import { Component, OnInit } from '@angular/core';
import { Education } from '../model/interface'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Heritage Institute Of Technology",
      course: 'B. TECH',
      duration: '2016- 2020',
      score: '8.25 CGPA',
    },
    {
      institute: 'D.A.V Public School, B.S. City',
      course: 'Intermediate',
      duration: '2013 -2015',
      score: '86%',
    },
    {
      institute: 'Agrasen D.A.V  Public School',
      course: 'Matriculation',
      duration: '2013',
      score: '10 CGPA',
    },
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
