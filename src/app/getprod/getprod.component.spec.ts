import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetprodComponent } from './getprod.component';

describe('GetprodComponent', () => {
  let component: GetprodComponent;
  let fixture: ComponentFixture<GetprodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetprodComponent]
    });
    fixture = TestBed.createComponent(GetprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
