import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  clickSub: any;
  constructor( private http: HttpClient) { }

  runHttp() {
    this.http.get('http://thecode4allinitiative.org/atlantis/atlantis/getAllFlightData.php')
    .subscribe(data => {
      console.log();
    });
  }


  ngOnInit() {}

}
