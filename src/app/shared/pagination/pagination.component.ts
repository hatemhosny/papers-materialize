import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() id: string;
  @Output() pageChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }


}
