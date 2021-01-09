import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchCriteria } from './../Model/SearchCriteria';

@Component({
    selector:'sm-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }
  
  public pageTitle = 'We are here to help you plan better!';

  srchCriteria = new SearchCriteria();

  rdbtnClick(btnId: string): void {
    this.srchCriteria.vacPref = btnId;
    console.log(this.srchCriteria.vacPref);
  }

  search(): void{
    this.router.navigateByUrl('/results');
  }

  ngOnInit(): void {
    this.srchCriteria = new SearchCriteria();
  }
}