import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryChipComponent} from "./category-chip.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [CategoryChipComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CategoryChipComponent]
})
export class CategoryChipModule { }
