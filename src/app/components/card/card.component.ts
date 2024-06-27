import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id?: string;
  @Input() image?: string;
  @Input() title?: string;
  @Input() price?: string;
  @Input() category?: string;

  constructor() { }

  ngOnInit() {}
}
