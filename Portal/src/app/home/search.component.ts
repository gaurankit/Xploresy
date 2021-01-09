import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from './../Model/SearchCriteria';

@Component({
    selector:'sm-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public pageTitle = 'We are here to help you plan better!';

  srchCriteria = new SearchCriteria();

  rdbtnClick(btnId: string): void {
    this.srchCriteria.vacPref = btnId;
    console.log(this.srchCriteria.vacPref);
  }

  search(): void{
    
  }

  ngOnInit(): void {
    this.srchCriteria = new SearchCriteria();
  }
}