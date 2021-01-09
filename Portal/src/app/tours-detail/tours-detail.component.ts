import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../Services/recommendation.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'tours-detail',
  templateUrl: './tours-detail.component.html',
  styleUrls: ['./tours-detail.component.scss']
})
export class ToursDetailComponent implements OnInit {
  id: number;
  destinations: any;
  selectedDestination: any;

  constructor(private route: ActivatedRoute,private router: Router) {
    let selectedPackage = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
   }

  ngOnInit(): void {
    this.getPackageDetails()
  }

  checkout(): void{
    this.router.navigateByUrl('/checkout');
  }

  getPackageDetails() {

  console.log(this.id);
  this.destinations = JSON.parse(localStorage.getItem('currentPackageList'));
  this.selectedDestination = this.destinations.find(x => x.packageId == this.id);
  console.log(this.selectedDestination);
  return this.selectedDestination;

  }

}
