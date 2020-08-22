import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBarbersComponent } from './our-barbers.component';

describe('OurBarbersComponent', () => {
  let component: OurBarbersComponent;
  let fixture: ComponentFixture<OurBarbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurBarbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBarbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
