import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ui-select',
  templateUrl: './ui-select.component.html',
  styleUrls: ['./ui-select.component.scss']
})
export class UiSelectComponent implements OnInit {

  constructor() { }

  @Input() options: string[]
  @Input() currentOptionIndex: number
  @Input() name: string
  @Input() label: string

  @Output() select: EventEmitter<any> = new EventEmitter();

  handleSelect(data) {
    this.select.emit(data)
  }

  ngOnInit() {
  }

}
