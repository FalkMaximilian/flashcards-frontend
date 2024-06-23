import { Component, Input } from '@angular/core';
import { Result } from '../sets-list/sets-list.component';

@Component({
  selector: 'app-set-list-element',
  standalone: true,
  imports: [],
  templateUrl: './set-list-element.component.html',
  styleUrl: './set-list-element.component.css'
})
export class SetListElementComponent {
  @Input() result!: Result;
}
