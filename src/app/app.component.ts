import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterLink, RouterModule } from '@angular/router'; // Import RouterModule for routing
import { HeaderComponent } from './header/header.component'; // Import Header
import { FooterComponent } from './footer/footer.component'; // Import Footer
import { AboutComponent } from './about/about.component'; // Import AboutComponent
import { ProjectsComponent } from './projects/projects.component'; // Import ProjectsComponent
import { SkillsetComponent } from './skillset/skillset.component'; // Import SkillsetComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    FooterComponent,
    // AboutComponent,
    // ProjectsComponent,
    // SkillsetComponent,
    CommonModule,
    RouterModule  // Import RouterModule
  ],
  providers: [
    {
      provide: 'ROUTES',
      useValue: [
        { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
        { path: 'home', component: AboutComponent },  // Home route
        { path: 'about', component: AboutComponent },  // About route
        { path: 'projects', component: ProjectsComponent },  // Projects route
        { path: 'skillset', component: SkillsetComponent },  // Skillset route
      ]
    }
  ]
})
export class AppComponent {
  title = 'My Portfolio';
}

