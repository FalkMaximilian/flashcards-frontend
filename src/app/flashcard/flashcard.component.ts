import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.css'
})
export class FlashcardComponent {
  isFlipped = false;
  @HostBinding('class') get hostClasses() {
    return {
      'relative': true,
      'w-full': true,
      'aspect-ratio-625': true,
      'max-h-card-lg': true,
      'max-w-card-lg': true,
      'flashcard-container': true,
    };
  }

  toggleFlip() {
    console.log("Flip")
    this.isFlipped = !this.isFlipped;
  }
}
