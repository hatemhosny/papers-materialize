import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  private _open: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  _toggleSidebar() {
    this._open = !this._open;
  }

}
