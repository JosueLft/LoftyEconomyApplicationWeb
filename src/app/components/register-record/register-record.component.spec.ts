import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRecordComponent } from './register-record.component';

describe('RegisterRecordComponent', () => {
  let component: RegisterRecordComponent;
  let fixture: ComponentFixture<RegisterRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
