import { CommentStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Tours } from './tours.model';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {

  destinations = new Tours();

  constructor() { }

  ngOnInit(): void {
    this.getToursList();
  }

  getToursList() {
    let destinations = new Tours();
    destinations[0].duration = "2 days";
    destinations[0].location = "New York"

    destinations[0].cost = "$200";

    destinations[1].duration = "2 days";
    destinations[1].location = "New York"

    destinations[1].cost = "$200";

    destinations[2].duration = "2 days";
    destinations[2].location = "New York"

    destinations[2].cost = "$200";
  }

}
