import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {

  constructor() { }
  @Input() name: string
  @Input() color: string
  @Input() background: string
  @Input() border: string
  @Input() padding: string
  @Input() width: string
  @Input() height: string
  @Input() fontSize = '14px'
  @Input() fontWeight = '400'
  @Input() disabled = false
  @Input() outline: string
  @Input() downloadLink: string

  @Output() clickButton: EventEmitter<any> = new EventEmitter();
  @Output() mouseoverButton: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.clickButton.emit(null);
  }

  handleMouseover() {
    this.mouseoverButton.emit(null);
  }

  ngOnInit() {
  }

}
