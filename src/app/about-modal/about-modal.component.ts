import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-modal',
  standalone: true,
  imports: [],
  templateUrl: './about-modal.component.html',
  styleUrl: './about-modal.component.css'
})
export class AboutModalComponent {
  @Input({required: true}) modalId!: string;
}
