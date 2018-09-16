import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixoComponent } from './fixo.component';

describe('FixoComponent', () => {
  let component: FixoComponent;
  let fixture: ComponentFixture<FixoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
