import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazeGenerationComponent } from './maze-generation.component';

describe('MazeGenerationComponent', () => {
  let component: MazeGenerationComponent;
  let fixture: ComponentFixture<MazeGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MazeGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MazeGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
