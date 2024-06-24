import { Component } from '@angular/core';
import { CardsListElementComponent } from '../cards-list-element/cards-list-element.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardsListElementComponent, NgFor],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css'
})
export class CardsListComponent {
  results: number[] = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  options = [10, 20, 30];
}
