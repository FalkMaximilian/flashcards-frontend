import { Component } from '@angular/core';
import { ProfileMenuComponent } from '../../profile-menu/profile-menu.component';
import { AboutModalComponent } from '../../about-modal/about-modal.component';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitcherComponent } from '../../theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ProfileMenuComponent, AboutModalComponent, RouterOutlet, ThemeSwitcherComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
