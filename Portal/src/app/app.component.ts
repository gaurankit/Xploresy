import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `<div><h2 style="padding-left:20px">{{title}}</h2><sm-search></sm-search></div>`
})
export class AppComponent {
  title = 'Vacation Planner';
}
