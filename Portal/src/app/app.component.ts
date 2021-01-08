import { Component , OnInit} from '@angular/core';
import { RecommendationService } from "./Services/recommendation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portal';

  constructor(private recommendationService: RecommendationService) { }

  getPackages(): void {
    let packages = this.recommendationService.getPackages("Dallas",2000,"Relex","Beach");
    console.log(packages);
  }

  ngOnInit() {

  }
}
