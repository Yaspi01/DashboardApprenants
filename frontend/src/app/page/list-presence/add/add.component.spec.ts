import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrenceComponent } from './add.component';

describe('AddPrenceComponent', () => {
  let component: AddPrenceComponent;
  let fixture: ComponentFixture<AddPrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
