import { Component, inject } from '@angular/core';
import { FlashcardComponent } from '../flashcard/flashcard.component';
import { AboutModalComponent } from '../about-modal/about-modal.component';
import { ProfileMenuComponent } from '../profile-menu/profile-menu.component';
import { AuthService } from '../auth.service';
import { SetsListComponent } from '../sets-list/sets-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlashcardComponent, AboutModalComponent, ProfileMenuComponent, SetsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
