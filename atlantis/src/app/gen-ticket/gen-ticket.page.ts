import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen-ticket',
  templateUrl: './gen-ticket.page.html',
  styleUrls: ['./gen-ticket.page.scss'],
})
export class GenTicketPage implements OnInit {
  tickets: Array<object>;
  constructor() { }

  ngOnInit() {
    fetch('http://thecode4allinitiative.org/atlantis/atlantis/getTicket.php').then(response => response.json()).then(parsedData => this.tickets = parsedData);
  }

}
