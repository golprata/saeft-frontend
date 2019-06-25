import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMotivosComponent } from './admin-motivos.component';

describe('AdminMotivosComponent', () => {
  let component: AdminMotivosComponent;
  let fixture: ComponentFixture<AdminMotivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMotivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMotivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
