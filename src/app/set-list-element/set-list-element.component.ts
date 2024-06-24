import { Component, HostBinding, Input } from '@angular/core';
import { FCSet } from '../set';
import { TimeAgoPipe } from '../time-ago.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-list-element',
  standalone: true,
  imports: [TimeAgoPipe],
  templateUrl: './set-list-element.component.html',
  styleUrl: './set-list-element.component.css'
})
export class SetListElementComponent {
  @Input() set!: FCSet;
  @HostBinding('class') class = 'flex flex-grow justify-center';

  onSetClick(): void {
    console.log(this.set);
   
    this.router.navigate(['/set', this.set.id]);
  }

  constructor(private router: Router) { }
}
