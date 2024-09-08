import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalComponent } from './project-modal.component';

describe('ProjectModalComponent', () => {
  let component: ProjectModalComponent;
  let fixture: ComponentFixture<ProjectModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectModalComponent]
    });
    fixture = TestBed.createComponent(ProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
