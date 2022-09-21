import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNoTasksComponent } from './home-no-tasks.component';

describe('HomeNoTasksComponent', () => {
  let component: HomeNoTasksComponent;
  let fixture: ComponentFixture<HomeNoTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNoTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNoTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
