import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sheet-row',
  templateUrl: './sheet-row.component.html',
  styleUrls: ['./sheet-row.component.scss']
})
export class SheetRowComponent implements OnInit {
  @Input() homework: any
  @Input() mode: string
  @Output() openEditModal: EventEmitter<any> = new EventEmitter();

  isHovered = false
  constructor() { }

  get comment() {
    return !this.isHovered
      ? `${this.homework.comment.slice(0, 100)}...`
      : this.homework.comment;
  }

  toggleComment() {
    this.isHovered = !this.isHovered;
  }

  ngOnInit() {
  }

}
