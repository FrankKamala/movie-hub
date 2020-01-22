import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorListComponent } from './horror-list.component';

describe('HorrorListComponent', () => {
  let component: HorrorListComponent;
  let fixture: ComponentFixture<HorrorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorrorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorrorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
