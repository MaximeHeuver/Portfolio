import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input()
  values: string[] = [];

  @Output()
  eventEmitter: EventEmitter<string> = new EventEmitter<string>()
  emitValueChange(value: string) {
    this.eventEmitter.emit(value);
  }
}
