import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosoptionsComponent } from './contratosoptions.component';

describe('ContratosoptionsComponent', () => {
  let component: ContratosoptionsComponent;
  let fixture: ComponentFixture<ContratosoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosoptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContratosoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
