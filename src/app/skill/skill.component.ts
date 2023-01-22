import { Component, OnInit } from '@angular/core';
import { Skill} from '../model/interface'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills: Skill[] = [
    {
      name: 'Python',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Flask,Padas',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Intermidiate',
      rating: 75,
    },
    
    {
      name: 'HTML, CSS, JS',
      level: 'Intermidiate',
      rating: 70,
    },
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
