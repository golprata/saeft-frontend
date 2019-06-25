import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTelaCarteiroComponent } from './admin-tela-carteiro.component';

describe('AdminTelaCarteiroComponent', () => {
  let component: AdminTelaCarteiroComponent;
  let fixture: ComponentFixture<AdminTelaCarteiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTelaCarteiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTelaCarteiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
