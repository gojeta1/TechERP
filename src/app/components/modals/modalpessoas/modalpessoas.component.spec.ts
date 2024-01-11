import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalpessoasComponent } from './modalpessoas.component';

describe('ModalpessoasComponent', () => {
  let component: ModalpessoasComponent;
  let fixture: ComponentFixture<ModalpessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalpessoasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalpessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
