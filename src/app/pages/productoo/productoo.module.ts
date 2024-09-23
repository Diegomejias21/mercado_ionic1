import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductooPageRoutingModule } from './productoo-routing.module';

import { ProductooPage } from './productoo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductooPageRoutingModule
  ],
  declarations: [ProductooPage]
})
export class ProductooPageModule {}
