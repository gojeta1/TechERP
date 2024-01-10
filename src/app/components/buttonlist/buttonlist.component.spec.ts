import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonlistComponent } from './buttonlist.component';

describe('ButtonlistComponent', () => {
  let component: ButtonlistComponent;
  let fixture: ComponentFixture<ButtonlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
