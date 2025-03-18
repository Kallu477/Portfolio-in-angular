import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
    { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
    { path: 'projects', loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent) },
    { path: 'skillset', loadComponent: () => import('./skillset/skillset.component').then(m => m.SkillsetComponent) }
];

