import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductooPage } from './productoo.page';

const routes: Routes = [
  {
    path: '',
    component: ProductooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductooPageRoutingModule {}
