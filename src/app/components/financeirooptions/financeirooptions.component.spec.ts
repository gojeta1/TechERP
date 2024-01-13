import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceirooptionsComponent } from './financeirooptions.component';

describe('FinanceirooptionsComponent', () => {
  let component: FinanceirooptionsComponent;
  let fixture: ComponentFixture<FinanceirooptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceirooptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinanceirooptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
