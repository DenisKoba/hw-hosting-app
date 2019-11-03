import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss']
})
export class UiInputComponent implements OnInit {

  constructor() { }
  @Input() disabled: boolean
  @Input() type = 'text'
  @Input() placeholder: string
  @Input() color = '#000000'
  @Input() value: string
  @Input() borderColor: string
  @Output() input: EventEmitter<any> = new EventEmitter();

  inputValue: string = null

  handleInput() {
    this.input.emit(this.inputValue)
  }

  ngOnInit() {
  }

}
