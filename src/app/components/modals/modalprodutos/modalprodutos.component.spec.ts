import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalprodutosComponent } from './modalprodutos.component';

describe('ModalprodutosComponent', () => {
  let component: ModalprodutosComponent;
  let fixture: ComponentFixture<ModalprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalprodutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
