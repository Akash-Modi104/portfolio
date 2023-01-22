import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.css']
})
export class PersonalinformationComponent implements OnInit {
  myData: string[][] = [
    ['Work Exp', '2 Years'],
    ['Education', 'B.Tech (2020)'],
    ['Interests', 'playing cricket , Sketching']
  ];

  aboutMe: string[] = [
    'Highly motivated and experienced Full Stack Developer with 2 years of experience developing web applications using Python, Flask, and Angular.',
    'Proven ability to design and implement robust and scalable software solutions. Strong skills in problem-solving, debugging, and testing.',
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
