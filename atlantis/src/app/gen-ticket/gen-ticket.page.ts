import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-gen-ticket',
  templateUrl: './gen-ticket.page.html',
  styleUrls: ['./gen-ticket.page.scss'],
})
export class GenTicketPage implements OnInit {
  
  //tickets: Array<object>;
  //public ID = 1;
  public data;
  public ticketID;
  public items: any;
 
  constructor( private route: ActivatedRoute, private http: HTTP ) { }

  async getTicket(tk=10) {
 
    try {
      const url = 'http://thecode4allinitiative.org/atlantis/atlantis/getTicket.php?ID=' + tk;
      const params = {};
      const headers = {};

      const response = await this.http.get(url, params, headers);

      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      this.items =  JSON.parse(response.data);
      console.log(response.headers);

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }
  }
  ngOnInit() {

    this.getTicket();

    //fetch('http://thecode4allinitiative.org/atlantis/atlantis/getTicket.php').then(response => response.json()).then(parsedData => this.tickets = parsedData);
  
  }

}
