import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-options',
  standalone: true,
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.css']
})
export class MenuOptionsComponent implements OnInit {
  @Output() public onChangeCategory = new EventEmitter();

  public changeCategory(e: any) {
    this.onChangeCategory.emit(e);
  }

  constructor() { }

  ngOnInit(): void { }
}
