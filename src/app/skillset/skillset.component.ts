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
  skills = ['Angular', 'C#', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'Express', 'Git'];
}
