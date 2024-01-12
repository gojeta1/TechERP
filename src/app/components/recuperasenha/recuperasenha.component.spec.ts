import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperasenhaComponent } from './recuperasenha.component';

describe('RecuperasenhaComponent', () => {
  let component: RecuperasenhaComponent;
  let fixture: ComponentFixture<RecuperasenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperasenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecuperasenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
