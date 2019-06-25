import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistroDiariosComponent } from './admin-registro-diarios.component';

describe('AdminRegistroDiariosComponent', () => {
  let component: AdminRegistroDiariosComponent;
  let fixture: ComponentFixture<AdminRegistroDiariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegistroDiariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistroDiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
