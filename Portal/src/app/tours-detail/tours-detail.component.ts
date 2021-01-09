import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../Services/recommendation.service';

@Component({
  selector: 'app-tours-detail',
  templateUrl: './tours-detail.component.html',
  styleUrls: ['./tours-detail.component.css']
})
export class ToursDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getToursList();
  }

  getToursList() {
  let recommService = new RecommendationService();
  let preferredLocation = "New York";
  let preferredBudget = 1000;
  let preferredVacation = "Night Life";
  let preferredActivity = "Club";

  let destinations = recommService.getPackages(preferredLocation, preferredBudget, preferredVacation, preferredActivity);
  return destinations;
  }

}
