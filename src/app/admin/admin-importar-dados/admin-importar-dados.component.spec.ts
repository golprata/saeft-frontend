import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImportarDadosComponent } from './admin-importar-dados.component';

describe('AdminImportarDadosComponent', () => {
  let component: AdminImportarDadosComponent;
  let fixture: ComponentFixture<AdminImportarDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImportarDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImportarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
