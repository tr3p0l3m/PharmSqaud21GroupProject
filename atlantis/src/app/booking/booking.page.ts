import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
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
  }

  ngOnInit() {
  }

}
