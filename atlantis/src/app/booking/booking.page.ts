import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PassingserviceService } from '../passingservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
<<<<<<< HEAD
  tripType: String;
  departureAirport: String;
  arrivalAirport: String;
  date: String;
  passengers: String;
  passClass: String;


  constructor( 
    private router: Router,
    private http: HttpClient, 
    private passingserviceService: PassingserviceService
    ) { }

  runHttp() {
    // this.http.get('http://thecode4allinitiative.org/atlantis/atlantis/getAllFlightData.php')
    // .subscribe(data => {
    //   console.log();
    // })

    // let flightdata1 = this.http.get('http://thecode4allinitiative.org/atlantis/atlantis/getAllFlightData.php?$date=[date]', {})
    // .subscribe(data => {
    //   console.log(data);
    //   this.datauser = data;
    // console.log(this.datauser);

    // })
  }

  bootHTTP (){
    this.passingserviceService.setflightType(this.tripType);
    this.passingserviceService.setdeparture(this.departureAirport);
    this.passingserviceService.setflightarrival(this.arrivalAirport);
    this.passingserviceService.setflightDate(this.date);
    this.passingserviceService.setflightPassengers(this.passengers);
    this.passingserviceService.setClass(this.passClass);
=======
  clickSub: any;
  constructor( private http: HttpClient, private LocalNotifications: LocalNotifications) { }

  runHttp() {
    this.http.get('http://thecode4allinitiative.org/atlantis/atlantis/getAllFlightData.php')
    .subscribe(data => {
      console.log();
    });
    this.Ticket_Notif();
  }

  Ticket_Notif(){
    this.LocalNotifications.schedule({
      id: 1,
      text: 'Your flight has been succesfully booked.',
      data: {secret: 'secret'},
      silent: false,
      group: 'Atlantis',
      autoClear: true,
      launch: true,
      priority: 3,
      vibrate: true,
      foreground: true
    });
>>>>>>> 13454c1fb7ce78f1c472f7c3809ad894cfcdc227
  }

  ngOnInit() {
  }

}
