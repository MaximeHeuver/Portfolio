import { Component, EventEmitter, Output  } from '@angular/core';
import * as events from "events";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Output()
  eventEmitter: EventEmitter<number> = new EventEmitter<number>()

  public sliderValue: number = 10;

  onSliderValueChange(value: string) {
    let parsedValue: number = parseInt(value)
    this.eventEmitter.emit(parsedValue)
  }
}
