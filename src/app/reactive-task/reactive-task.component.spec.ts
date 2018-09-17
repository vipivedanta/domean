import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTaskComponent } from './reactive-task.component';

describe('ReactiveTaskComponent', () => {
  let component: ReactiveTaskComponent;
  let fixture: ComponentFixture<ReactiveTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
