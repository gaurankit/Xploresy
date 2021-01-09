import { Component, OnInit } from '@angular/core';
import { RecommendationService } from "./Services/recommendation.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  // template: `<div><h2 style="padding-left:20px">{{title}}</h2><sm-search></sm-search></div>`
})

export class AppComponent implements OnInit {
  title = 'WOW - Home';

  constructor(private router: Router) { }

  goToHome(){
    this.router.navigateByUrl('/search');
  }

  ngOnInit() {

  }
}

