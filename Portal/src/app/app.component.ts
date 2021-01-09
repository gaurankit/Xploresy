import { Component, OnInit } from '@angular/core';
import { RecommendationService } from "./Services/recommendation.service";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  // template: `<div><h2 style="padding-left:20px">{{title}}</h2><sm-search></sm-search></div>`
})

export class AppComponent implements OnInit {
  title = 'WOW - Home';

  constructor(private recommendationService: RecommendationService) { }

  getPackages(): void {
    let packages = this.recommendationService.getPackages("Dallas",2000,"Relax","Beach");
    console.log(packages);
  }

  ngOnInit() {

  }
}

