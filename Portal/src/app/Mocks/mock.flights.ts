import { Flight } from '../Model/Flight';



  export const Flights: Flight[] = [
    {
      airlineName:"Delta",
      sourceAirport:"DFW",
      sourceCity:"Dallas",
      destinationAirport:"LAS",
      destinationCity:"Las Vegas",
      Price:400,
      duration:3,
      startDateTime:new Date(2020,1,20),
      endDateTime:new Date(2020,1,25),
      stops:0,
      freeChange:false,
      number:"DL2343",
      refundable:false,
      logo:"",
      rank:0,
      tags:""
    },
    {
      airlineName:"American",
      sourceAirport:"DFW",
      sourceCity:"Dallas",
      destinationAirport:"HNL",
      destinationCity:"Honolulu",
      Price:250,
      duration:2,
      startDateTime:new Date(2020,2,12),
      endDateTime:new Date(2020,2,15),
      stops:0,
      freeChange:false,
      number:"AA2342",
      refundable:false,
      logo:"",
      rank:0,
      tags:""
    },
    {
      airlineName:"American",
      sourceAirport:"DFW",
      sourceCity:"Dallas",
      destinationAirport:"MSY",
      destinationCity:"New Orleans",
      Price:150,
      duration:1.5,
      startDateTime:new Date(2020,3,1),
      endDateTime:new Date(2020,3,5),
      stops:0,
      freeChange:true,
      number:"AA5689",
      refundable:true,
      logo:"",
      rank:0,
      tags:""
    },
    {
      airlineName:"United",
      sourceAirport:"DFW",
      sourceCity:"Dallas",
      destinationAirport:"DEN",
      destinationCity:"Colorado",
      Price:120,
      duration:2.5,
      startDateTime:new Date(2020,3,1),
      endDateTime:new Date(2020,3,5),
      stops:0,
      freeChange:true,
      number:"UA5600",
      refundable:false,
      logo:"",
      rank:0,
      tags:""
    }
];
