import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastroUnidadeComponent } from './admin-cadastro-unidade.component';

describe('AdminCadastroUnidadeComponent', () => {
  let component: AdminCadastroUnidadeComponent;
  let fixture: ComponentFixture<AdminCadastroUnidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCadastroUnidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCadastroUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
