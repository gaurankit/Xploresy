import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../Services/recommendation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tours-detail',
  templateUrl: './tours-detail.component.html',
  styleUrls: ['./tours-detail.component.scss']
})
export class ToursDetailComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) {
    let selectedPackage = this.route.params.subscribe(params => {
      this.id = params['id']; 
    });
   }

  ngOnInit(): void {
    this.getPackageDetails();
  }

  getPackageDetails() {
        
        console.log(this.id);
  let recommService = new RecommendationService();
  let preferredLocation = "New York";
  let preferredBudget = 1000;
  let preferredVacation = "Night Life";
  let preferredActivity = "Club";

  let destinations = recommService.getPackages(preferredLocation, preferredBudget, preferredVacation, preferredActivity);
  destinations[0].name = "Spirt";
  destinations[0].cost = 78;
  destinations[0].image = 'https://static-21.sinclairstoryline.com/resources/media/d7356d44-c49a-4f2d-871f-2289614b2d29-large16x9_spirit.logo.JPG'; 

  destinations[1].name = "Luxor Hotel & Casino";
  destinations[1].cost = 46;

  destinations[1].image = 'https://i.pinimg.com/originals/e0/7e/21/e07e21e7eee14b148d6b73fd3b8affd1.jpg';
  return destinations;
  }

}
