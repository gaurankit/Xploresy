import { Injectable } from '@angular/core';
import { Activity } from '../Model/Activity';
import { Car } from '../Model/Car';
import { Flight } from '../Model/Flight';
import { Hotel } from '../Model/Hotel';
import { Package } from '../Model/Package';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor() { }

  getPackages(sourceLocation:string,budget:number,vacationPref:string,activityPref:string) {
    var packageList:Package[] = [];

    let package1 = {} as Package;
    package1.cost=1000;
    package1.name="Trip to San Francisco";
    package1.car=new Car();
    package1.activity=new Activity();
    package1.flight=new Flight();
    package1.hotel=new Hotel();
    package1.city="San Francisco";
    package1.startDate=new Date();
    package1.endDate=new Date();
    package1.image = 'https://qtxasset.com/styles/breakpoint_sm_default_480px_w/s3/travelagentcentral/1597853698/GettyImages-1136437406.jpg/GettyImages-1136437406.jpg?J3neYunxLcKFuuBDV7tatFNIawH6Ascs&itok=TBkxtz0m';

    let package2 = {} as Package;
    package2.cost=2000;
    package2.name="Trip to MAUI";
    package2.car=new Car();
    package2.activity=new Activity();
    package2.flight=new Flight();
    package2.hotel=new Hotel();
    package2.city="MAUI";
    package2.startDate=new Date();
    package2.endDate=new Date();
    package2.image = 'https://www.hawaii-guide.com/images/made/maui-travel-guide-2020-v3_1920_575_90_s_c1_c_c_0_0_800_600_95_s_c1_c_b_0_0.jpg';

    packageList.push(package1);
    packageList.push(package2);

    return packageList;
  }
}
