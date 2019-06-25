import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImportarEfetividadeComponent } from './admin-importar-efetividade.component';

describe('AdminImportarEfetividadeComponent', () => {
  let component: AdminImportarEfetividadeComponent;
  let fixture: ComponentFixture<AdminImportarEfetividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImportarEfetividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImportarEfetividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
