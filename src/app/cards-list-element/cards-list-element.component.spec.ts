import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListElementComponent } from './cards-list-element.component';

describe('CardsListElementComponent', () => {
  let component: CardsListElementComponent;
  let fixture: ComponentFixture<CardsListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsListElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
