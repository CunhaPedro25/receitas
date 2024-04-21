import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {CategoryChipComponent} from "../../components/category-chip/category-chip.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    NgOptimizedImage
  ],
    declarations: [HomePage, CategoryChipComponent]
})
export class HomePageModule {}
