import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProdComponent } from './tab-prod.component';

describe('TabProdComponent', () => {
  let component: TabProdComponent;
  let fixture: ComponentFixture<TabProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
