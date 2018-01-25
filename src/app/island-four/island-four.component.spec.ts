import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandFourComponent } from './island-four.component';

describe('IslandFourComponent', () => {
  let component: IslandFourComponent;
  let fixture: ComponentFixture<IslandFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslandFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
