/* projects.component.ts */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule], // Add this line
  standalone: true
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Restaurant Menu App',
      description: 'A full-featured restaurant menu app with review and rating functionality.',
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio to showcase my projects and skills.',
    }
  ];
}
