import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchCriteria } from './../Model/SearchCriteria';

@Component({
    selector:'sm-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  public pageTitle = 'We are here to help you plan better!';

  srchCriteria = new SearchCriteria();

  constructor(private router: Router) { }

  rdbtnClick(btnId: string): void {
    this.srchCriteria.vacPref = btnId;
    console.log(this.srchCriteria.vacPref);
  }

  search(): void{
    this.router.navigateByUrl('/loading');
  }

  ngOnInit(): void {
    this.srchCriteria = new SearchCriteria();
  }
}