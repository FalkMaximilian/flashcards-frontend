import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { AboutModalComponent } from './about-modal/about-modal.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlashcardComponent, AboutModalComponent, ProfileMenuComponent, CommonModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Flashcards';

  constructor(public authService: AuthService) {}
}
