import { Injectable } from '@angular/core';
import { Activity } from '../Model/Activity';
import { Car } from '../Model/Car';
import { Flight } from '../Model/Flight';
import { Hotel } from '../Model/Hotel';
import { Package } from '../Model/Package';

import { FLIGHTS } from '../Mocks/mock.flights';
import { HOTELS } from '../Mocks/mock.hotels';
import { CARS } from '../Mocks/mock.car';
import { ACTIVITIES } from '../Mocks/mock.activity';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor() { }

  getPackages(sourceLocation:string,totalBudget:number,vacationPref:string,activityPref:string) {
    var packageList:Package[] = [];

    let packageFlights = this.getFlights(sourceLocation,totalBudget,vacationPref) as Flight[];
    for (let index = 0; index < packageFlights.length; index++) {
      let flight = packageFlights[index];
      let hotel = this.getHotel(flight.destinationCity,totalBudget,vacationPref) as Hotel;
      let car = this.getCar(flight.destinationCity,totalBudget,vacationPref) as Car;
      let activity = this.getActivity(flight.destinationCity,totalBudget,vacationPref) as Activity;

      let pkg = {} as Package;
      pkg.packageId = Math.floor(Math.random() * Math.floor(1000000));
      pkg.flight = flight;
      pkg.hotel = hotel;
      pkg.car = car;
      pkg.activity = activity;
      pkg.name = "Trip to " + flight.destinationCity;
      pkg.city = flight.destinationCity;
      pkg.cost = this.calculatePackagePrice(flight.Price , hotel.price , car.Price , activity.Price);
      pkg.startDate = flight.startDateTime;
      pkg.endDate = flight.endDateTime;
      pkg.image = this.getPackageImage(flight.destinationCity);
      console.log(pkg);
      packageList.push(pkg);

    }
    localStorage.setItem('currentPackageList', JSON.stringify(packageList));
    return packageList;
  }

  calculatePackagePrice(flightPrice:number,hotelPrice:number,carPrice:number,activityPrice:number){
    if(carPrice==undefined)
      carPrice=0;

    if(activityPrice==undefined)
      activityPrice=0;

    let packageCost = flightPrice+hotelPrice+carPrice+activityPrice;
    return packageCost;

  }

  getFlights(sourceLocation:string,totalBudget:number,vacationPref:string){
        let flights = FLIGHTS.filter(x=> x.sourceCity.toUpperCase()==sourceLocation.toUpperCase());
        console.log("Flights found - ");
        console.log(flights);

        if(flights.length < 1)
          return new Flight();

        if(flights.length == 1){
          return flights[0];
        }

        let flightBudget = this.getFlightBudget(vacationPref,totalBudget);
        console.log("Flight Budget - "+ flightBudget);

        let budgetFlights = flights.filter(x=> x.Price<=flightBudget);

        if(budgetFlights.length < 1)
          return new Flight();

        console.log("budgetFlights found - ");
        console.log(budgetFlights);
        return budgetFlights;
  }

  getHotel(destinationLocation:string,totalBudget:number,vacationPref:string){
    let hotels = HOTELS.filter(x=> x.city.toUpperCase()==destinationLocation.toUpperCase());
    console.log("Hotels found - ");
    console.log(hotels);

    if(hotels.length < 1)
      return new Flight();

    if(hotels.length == 1){
      return hotels[0];
    }

    let hotelBudget = this.getHotelBudget(vacationPref,totalBudget);
    console.log("Hotel Budget - "+ hotelBudget);

    let budgetHotels = hotels.filter(x=> x.price<=hotelBudget);

    if(budgetHotels.length < 1)
      return new Hotel();

    console.log("budgetHotels found - ");
    console.log(budgetHotels);
    return budgetHotels[0];
}

getCar(destinationLocation:string,totalBudget:number,vacationPref:string){
  let cars = CARS.filter(x=> x.pickUpLocation.toUpperCase()==destinationLocation.toUpperCase());
  console.log("cars found - ");
  console.log(cars);

  if(cars.length < 1)
    return new Car();

  if(cars.length == 1){
    return cars[0];
  }

  let carBudget = this.getCarBudget(vacationPref,totalBudget);
  console.log("Car Budget - "+ carBudget);

  let budgetCars = cars.filter(x=> x.Price<=carBudget);

  if(budgetCars.length < 1)
    return new Car();

  console.log("budgetHotels found - ");
  console.log(budgetCars);
  return budgetCars[0];
}

getActivity(destinationLocation:string,totalBudget:number,vacationPref:string){
  let activities = ACTIVITIES.filter(x=> x.city.toUpperCase()==destinationLocation.toUpperCase());
  console.log("activities found - ");
  console.log(activities);

  if(activities.length < 1)
    return new Activity();

  if(activities.length == 1){
    return activities[0];
  }

  let activitiesBudget = this.getActivityBudget(vacationPref,totalBudget);
  console.log("Activities Budget - "+ activitiesBudget);

  let budgetActivities = activities.filter(x=> x.Price<=activitiesBudget);

  if(budgetActivities.length < 1)
    return new Car();

  console.log("budgetHotels found - ");
  console.log(budgetActivities);
  return budgetActivities[0];
}


  getFlightBudget(vacationPref:string,totalBudget:number){
    let flightBudget = 0;

    switch(vacationPref){
      case"Relaxing": {
          flightBudget = totalBudget*20/100;
          break;
      }
      case"Luxury": {
        flightBudget = totalBudget*30/100;
        break;
      }
      case"Adventurous": {
        flightBudget = totalBudget*20/100;
        break;
      }
    }
    return flightBudget;
  }

  getHotelBudget(vacationPref:string,totalBudget:number){
    let HotelBudget = 0;

    switch(vacationPref){
      case"Relaxing": {
        HotelBudget = totalBudget*40/100;
          break;
      }
      case"Luxury": {
        HotelBudget = totalBudget*40/100;
        break;
      }
      case"Adventurous": {
        HotelBudget = totalBudget*25/100;
        break;
      }
    }
    return HotelBudget;
  }

  getCarBudget(vacationPref:string,totalBudget:number){
    let CarBudget = 0;

    switch(vacationPref){
      case"Relaxing": {
        CarBudget = totalBudget*10/100;
          break;
      }
      case"Luxury": {
        CarBudget = totalBudget*20/100;
        break;
      }
      case"Adventurous": {
        CarBudget = totalBudget*15/100;
        break;
      }
    }
    return CarBudget;
  }

  getActivityBudget(vacationPref:string,totalBudget:number){
    let activityBudget = 0;

    switch(vacationPref){
      case"Relaxing": {
        activityBudget = totalBudget*10/100;
          break;
      }
      case"Luxury": {
        activityBudget = totalBudget*30/100;
        break;
      }
      case"Adventurous": {
        activityBudget = totalBudget*40/100;
        break;
      }
    }
    return activityBudget;
  }

  getPackageImage(city:string){

    if(city=="Las Vegas")
    return "https://pix10.agoda.net/hotelImages/75/-1/450838815fb602d9fe58bba500a04a84.jpg?s=1024x768";

    if(city=="New Orleans")
    return "https://magnoliahotels.com/new-orleans/wp-content/uploads/sites/8/2020/05/5-12.jpg";

    if(city=="Colorado")
    return "https://www.cobizmag.com/wp-content/uploads/data-import/06063aa7/breck2.jpg";

    if(city=="Honolulu")
    return "https://media.shermanstravel.com/honolulu.jpg";

  }


}


