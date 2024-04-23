import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { IonicModule } from '@ionic/angular';

import { RestaurantPageRoutingModule } from './restaurant-routing.module';

import { RestaurantPage } from './restaurant.page';
import {CategoryChipModule} from "../../components/category-chip/category-chip.module";
import {MapComponent} from "../../components/map/map.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantPageRoutingModule,
    CategoryChipModule,
    MapComponent,
    LeafletModule
  ],
  declarations: [RestaurantPage]
})
export class RestaurantPageModule {}
