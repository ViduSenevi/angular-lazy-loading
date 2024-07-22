import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithLazyComponent } from './with-lazy.component';

const routes: Routes = [{ path: '', component: WithLazyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithLazyRoutingModule { }
