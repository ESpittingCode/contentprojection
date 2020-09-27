import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRowInfoComponent } from './user-row-info.component';

describe('UserRowInfoComponent', () => {
  let component: UserRowInfoComponent;
  let fixture: ComponentFixture<UserRowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRowInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
