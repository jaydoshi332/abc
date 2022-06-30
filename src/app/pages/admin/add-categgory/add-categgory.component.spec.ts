import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCateggoryComponent } from './add-categgory.component';

describe('AddCateggoryComponent', () => {
  let component: AddCateggoryComponent;
  let fixture: ComponentFixture<AddCateggoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCateggoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCateggoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
