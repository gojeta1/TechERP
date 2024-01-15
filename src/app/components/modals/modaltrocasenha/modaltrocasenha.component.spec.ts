import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltrocasenhaComponent } from './modaltrocasenha.component';

describe('ModaltrocasenhaComponent', () => {
  let component: ModaltrocasenhaComponent;
  let fixture: ComponentFixture<ModaltrocasenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaltrocasenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModaltrocasenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
