import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRecapComponent } from './game-recap.component';

describe('GameRecapComponent', () => {
  let component: GameRecapComponent;
  let fixture: ComponentFixture<GameRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
