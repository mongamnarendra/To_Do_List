import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlistComponent } from './editlist.component';

describe('EditlistComponent', () => {
  let component: EditlistComponent;
  let fixture: ComponentFixture<EditlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditlistComponent]
    });
    fixture = TestBed.createComponent(EditlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
