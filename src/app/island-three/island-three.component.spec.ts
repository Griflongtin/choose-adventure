import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandThreeComponent } from './island-three.component';

describe('IslandThreeComponent', () => {
  let component: IslandThreeComponent;
  let fixture: ComponentFixture<IslandThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslandThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
