import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassingserviceService {


  flightType:String = '';
  flightmodel: String = '';
  departure: String = '';
  arrival: String = '';
  date: String = '';
  price: Number = 0;
  time: String = '';
  flightID: Number = 0;
  Passengers: String= '';
  flightClass: String = '';

  constructor() { }

  // setNavData(navObj){
  //   this.navData = navObj;
  // }

  // getNavData(){
  //   if(this.navData == null)
  //     return 0;
  //   return this.navData;
  // }

  setflightType(type){
    this.flightType = type; 
  }
  
  setflightModel(model){
    this.flightmodel = model; 
  }

  setdeparture(depart){
    this.departure = depart; 
  }

  setflightarrival(arrive){
    this.arrival = arrive; 
  }

  setflightDate(date){
    this.date = date; 
  }

  setflightPrice(price){
    this.price = price; 
  }

  setflightTime(time){
    this.time = time; 
  }

  setflightFlightID(FlID){
    this.flightID = FlID; 
  }

  setflightPassengers(passengers){
    this.Passengers = passengers; 
  }

  setClass(flightclass){
    this.flightClass = flightclass; 
  }

  //getter methods
  getflightType(){
    return this.flightType; 
  }

  getflightModel(){
    return this.flightmodel; 
  }

  getdeparture(){
    return this.departure; 
  }

  getflightarrival(){
    return this.arrival; 
  }

  getflightDate(){
    return this.date; 
  }

  getflightPrice(){
    return this.price; 
  }

  getflightTime(){
    return this.time; 
  }

  getflightFlightID(){
    return this.flightID; 
  }

  getflightPassengers(){
    return this.Passengers; 
  }

  getClass(){
    return this.flightClass; 
  }

  
}
