import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private _open: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public toggleSidebar() {
    this._open = !this._open;
  }
}
