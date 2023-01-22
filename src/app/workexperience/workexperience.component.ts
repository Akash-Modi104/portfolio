import { Component, OnInit } from '@angular/core';
import { WorkExperience} from '../model/interface'

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Python Full Stack developer',
      company: 'Tata Consultancy Services',
      duration: 'April 2021 - Now',
      description: [
        'Skilled in Python with 2 years of experience.',
        'Experience of more than 1 year on ANGULAR.',
        'Deep Understanding of technologies like Python. Flask ,Angular. Experience on various other platforms like SQL, HTML, CSS, Bootstrap, JavaScript, Python.',
        'Evaluation of expertise in Version Control System like GIT Outlines Integration process deﬁnition and application design.',
         'Excellent time management skills with ability to perform under pressure & meet deadlines.',
         'Always passionate about problem solving by learning and implementing new technologies.',
        'Very good team player, can work on challenging tasks by coordinating with team very well.',
        ' Excellent time management skills with ability to perform under pressure & meet deadlines.',
      ],
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
