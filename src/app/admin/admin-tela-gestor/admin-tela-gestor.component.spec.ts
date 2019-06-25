import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTelaGestorComponent } from './admin-tela-gestor.component';

describe('AdminTelaGestorComponent', () => {
  let component: AdminTelaGestorComponent;
  let fixture: ComponentFixture<AdminTelaGestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTelaGestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTelaGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
