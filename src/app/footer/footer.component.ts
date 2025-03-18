import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  profileName = 'Kalyani Kongala';
  contactEmail = 'kalvenk@gmail.com';
  contactPhone = 'Phone: 123-456-7890';
}
