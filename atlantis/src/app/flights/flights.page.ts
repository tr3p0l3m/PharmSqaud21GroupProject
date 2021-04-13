import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {PassingserviceService} from '../passingservice.service';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.page.html',
  styleUrls: ['./flights.page.scss'],
})
export class FlightsPage implements OnInit {


  public flights = [{date: "08:00 pm - 09:45 pm", model: "JK907",price: "$500"},
                    {date: "08:00 pm - 09:45 pm", model: "KP907",price: "$1500"},
                    {date: "08:00 pm - 09:45 pm", model: "001",price: "$2000"}];
  data: any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private passingserviceService:PassingserviceService
  ) {

   }

  ngOnInit() {
  }

}
