import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandTwoComponent } from './island-two.component';

describe('IslandTwoComponent', () => {
  let component: IslandTwoComponent;
  let fixture: ComponentFixture<IslandTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslandTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
