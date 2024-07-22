import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerlyComponentComponent } from './eagerly-component/eagerly-component.component';



@NgModule({
  declarations: [
    EagerlyComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WithoutLazyModule { }
