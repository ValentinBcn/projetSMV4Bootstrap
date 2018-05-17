import { Component } from '@angular/core';
import { dataApi } from './dataApi.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [dataApi]
})
export class AppComponent {
  title = 'app';
}
