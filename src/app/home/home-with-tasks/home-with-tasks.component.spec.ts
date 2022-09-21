import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWithTasksComponent } from './home-with-tasks.component';

describe('HomeWithTasksComponent', () => {
  let component: HomeWithTasksComponent;
  let fixture: ComponentFixture<HomeWithTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWithTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWithTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
