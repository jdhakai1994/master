import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLibComponent } from './master-lib.component';

describe('MasterLibComponent', () => {
  let component: MasterLibComponent;
  let fixture: ComponentFixture<MasterLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
