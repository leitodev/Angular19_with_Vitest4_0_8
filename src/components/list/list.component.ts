import { Component } from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-list',
  imports: [
    MatList,
    MatListItem,
    ScrollingModule
  ],
  templateUrl: './list.component.html',
  standalone: true,
  styleUrl: './list.component.scss'
})
export class ListComponent {
  items: Item[] = [];
  // Simulate large data; replace with your data source (e.g., API fetch)
  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      this.items.push({ id: i, name: `Item ${i}` });
    }
  }
}
