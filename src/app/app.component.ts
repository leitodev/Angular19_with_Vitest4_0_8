import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatListModule} from '@angular/material/list';
import {ListComponent} from '../components/list/list.component';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  imports: [
    MatSlideToggleModule,
    ScrollingModule,
    MatListModule, ListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app_v19';

  items: Item[] = [];
  // Simulate large data; replace with your data source (e.g., API fetch)
  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      this.items.push({ id: i, name: `Item ${i}` });
    }
  }

}
