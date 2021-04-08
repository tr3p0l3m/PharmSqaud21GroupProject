import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenTicketPage } from './gen-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: GenTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenTicketPageRoutingModule {}
