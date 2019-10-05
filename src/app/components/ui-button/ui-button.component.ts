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

  @Output() click: EventEmitter<any> = new EventEmitter();
  @Output() mouseover: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.click.emit(null)
  }

  handleMouseover() {
    this.mouseover.emit(null)
  }

  ngOnInit() {
  }

}
