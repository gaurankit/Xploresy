import { Flight } from './Flight';
import { Hotel } from './Hotel';
import { Car } from './Car';
import { Activity } from './Activity';

export class Package {
  flight: Flight;
  hotel: Hotel;
  car: Car;
  activity: Activity;
  startDate:Date;
  endDate:Date;
  cost:number;
  name:string;
  city:string;
  image: string;
}
