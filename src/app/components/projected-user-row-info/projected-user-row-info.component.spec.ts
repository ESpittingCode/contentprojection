import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectedUserRowInfoComponent } from './projected-user-row-info.component';

describe('ProjectedUserRowInfoComponent', () => {
  let component: ProjectedUserRowInfoComponent;
  let fixture: ComponentFixture<ProjectedUserRowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectedUserRowInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectedUserRowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
