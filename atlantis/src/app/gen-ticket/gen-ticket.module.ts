import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenTicketPageRoutingModule } from './gen-ticket-routing.module';

import { GenTicketPage } from './gen-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenTicketPageRoutingModule
  ],
  declarations: [GenTicketPage]
})
export class GenTicketPageModule {}
