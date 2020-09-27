import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectedSearchInputComponent } from './projected-search-input.component';

describe('ProjectedSearchInputComponent', () => {
  let component: ProjectedSearchInputComponent;
  let fixture: ComponentFixture<ProjectedSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectedSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectedSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
