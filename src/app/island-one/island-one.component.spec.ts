import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandOneComponent } from './island-one.component';

describe('IslandOneComponent', () => {
  let component: IslandOneComponent;
  let fixture: ComponentFixture<IslandOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslandOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
