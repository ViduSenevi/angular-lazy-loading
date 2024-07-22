import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithLazyRoutingModule } from './with-lazy-routing.module';
import { WithLazyComponent } from './with-lazy.component';


@NgModule({
  declarations: [
    WithLazyComponent
  ],
  imports: [
    CommonModule,
    WithLazyRoutingModule
  ]
})
export class WithLazyModule { }
