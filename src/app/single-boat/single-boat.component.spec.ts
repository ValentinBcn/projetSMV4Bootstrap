import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBoatComponent } from './single-boat.component';

describe('SingleBoatComponent', () => {
  let component: SingleBoatComponent;
  let fixture: ComponentFixture<SingleBoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
