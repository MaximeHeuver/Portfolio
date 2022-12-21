import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveFunctionCollapseComponent } from './wave-function-collapse.component';

describe('WaveFunctionCollapseComponent', () => {
  let component: WaveFunctionCollapseComponent;
  let fixture: ComponentFixture<WaveFunctionCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveFunctionCollapseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveFunctionCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
