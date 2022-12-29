import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklistSearchComponent } from './worklist-search.component';

describe('WorklistSearchComponent', () => {
  let component: WorklistSearchComponent;
  let fixture: ComponentFixture<WorklistSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorklistSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorklistSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
