import { CommentStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../Services/recommendation.service';
import { Tours } from './tours.model';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {

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

  getImageUrl()
  {
    return "url(" +  + ")";
  }

}
