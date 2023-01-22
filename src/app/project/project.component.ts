import { Component, OnInit } from '@angular/core';
import { Project} from '../model/interface'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'T20_Match_Score_Predictor',
      technologies: 'Python,Pandas,Flask,html,Js,Css',
      description: [
        'A simple web app made using flask which will predict projected score of a T20 match by analyzing current situation'
      ],
      link: 'https://github.com/Akash-Modi104/T20_Match_Score_Predictor',
    },
    {
      title: 'Old-Car price predictor',
      technologies: 'Python,Pandas,Flask,html,Js,Css',
      description: [
        'A simple web app to find out correct price of old car using certain parameter',
      ],
      link: 'https://github.com/Akash-Modi104/car_price_predictor',
    },
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
