import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalusuariosComponent } from './modalusuarios.component';

describe('ModalusuariosComponent', () => {
  let component: ModalusuariosComponent;
  let fixture: ComponentFixture<ModalusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalusuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
