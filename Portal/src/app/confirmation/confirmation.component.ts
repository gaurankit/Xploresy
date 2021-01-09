import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {
    constructor(private router: Router) { }
    id: number;
    destinations: any;
    selectedDestination: any;
    
  ngOnInit(): void {
    this.getTripDetails();
  }

  getTripDetails() {
    this.id=JSON.parse(localStorage.getItem('itinerary'));    
    this.destinations = JSON.parse(localStorage.getItem('currentPackageList'));
    this.selectedDestination = this.destinations.find(x => x.packageId == this.id);
    console.log(this.selectedDestination);
    return this.selectedDestination;
  
    }

}