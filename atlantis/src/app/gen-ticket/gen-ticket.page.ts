import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'app-gen-ticket',
  templateUrl: './gen-ticket.page.html',
  styleUrls: ['./gen-ticket.page.scss'],
})
export class GenTicketPage implements OnInit {
  tickets: Array<object>;
  constructor(private LocalNotifications: LocalNotifications) { }

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
    fetch('http://thecode4allinitiative.org/atlantis/atlantis/getTicket.php').then(response => response.json()).then(parsedData => this.tickets = parsedData);
    this.Ticket_Notif();
  }

}
