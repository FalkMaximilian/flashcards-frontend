import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetListElementComponent } from './set-list-element.component';

describe('SetListElementComponent', () => {
  let component: SetListElementComponent;
  let fixture: ComponentFixture<SetListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetListElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
