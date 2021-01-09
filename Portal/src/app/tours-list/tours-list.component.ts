import { CommentStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../Services/recommendation.service';
import { Tours } from './tours.model';
import { Router } from '@angular/router';
import { SearchCriteria } from '../Model/SearchCriteria';

@Component({
  selector: 'tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss']
})
export class ToursListComponent implements OnInit {
  passengerCount = ''; 
  fromDate = '';
  toDate = '';
  cost = 0;
  searchcrt: any;
  destinations: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  
    this.getToursList();
    
  }

  getToursList() {
  let recommService = new RecommendationService();
  let preferredActivity = "Club";

  let searchcrt = <SearchCriteria>JSON.parse(localStorage.getItem('searchCriteria'));
  console.log(searchcrt);

  this.passengerCount = '2';
  this.cost = searchcrt.budget;
  this.fromDate = '01/12/2021';
  this.toDate = '01/15/2021';
  
  this.destinations = recommService.getPackages(searchcrt.origin, searchcrt.budget, searchcrt.vacPref, preferredActivity);
  return this.destinations;
  }

  goToProductDetails(id: any) {
    this.router.navigate(['/detail', id]);
  }

  savePassengerCount(value){
    this.passengerCount=value;
  }
  saveFromDate(value){
    this.fromDate=value;
  }
  saveToDate(value){
    this.toDate=value;
  }
  saveCost(value){
    this.cost=value;
  }

}
