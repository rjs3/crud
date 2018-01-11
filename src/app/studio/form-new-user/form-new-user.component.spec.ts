import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewUserComponent } from './form-new-user.component';

describe('FormNewUserComponent', () => {
  let component: FormNewUserComponent;
  let fixture: ComponentFixture<FormNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
