import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skillset',
  imports: [CommonModule, RouterModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss',
  standalone: true
})
export class SkillsetComponent {
  skills = ['HTML5', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'Git',
     'gitHub', 'Jira', 'MongoDB', 'Mongoose', 'Angular', 'React', 'Redux', 'RESTful APIs'
  ];
}
