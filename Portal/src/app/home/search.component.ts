import { Component } from '@angular/core';

@Component({
    selector:'sm-search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
  public pageTitle = 'We are here to help you plan better!';

  search(): void{}
}