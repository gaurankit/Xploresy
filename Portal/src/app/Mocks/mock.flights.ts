import { Flight } from '../Model/Flight';



  export const FLIGHTS : Flight[] = [
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
      logo:"https://knowtion-inc.com/wp-content/uploads/2017/03/Delta-Air-Lines-Logo.png",
      rank:0,
      tags:""
    },
    {
      airlineName:"American",
      sourceAirport:"DFW",
      sourceCity:"Dallas",
      destinationAirport:"HNL",
      destinationCity:"Honolulu",
      Price:800,
      duration:2,
      startDateTime:new Date(2020,2,12),
      endDateTime:new Date(2020,2,15),
      stops:0,
      freeChange:false,
      number:"AA2342",
      refundable:false,
      logo:"https://s21.q4cdn.com/616071541/files/multimedia-gallery/assets/Logos/american-airlines/aa_aa__hrz_rgb_grd_pos.png",
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
      logo:"https://s21.q4cdn.com/616071541/files/multimedia-gallery/assets/Logos/american-airlines/aa_aa__hrz_rgb_grd_pos.png",
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
      logo:"https://seeklogo.net/wp-content/uploads/2017/04/united-airlines-logo-01.png",
      rank:0,
      tags:""
    }
];
