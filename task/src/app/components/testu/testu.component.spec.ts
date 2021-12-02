import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestuComponent } from './testu.component';

describe('TestuComponent', () => {
  let component: TestuComponent;
  let fixture: ComponentFixture<TestuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
