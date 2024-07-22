import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerlyComponentComponent } from './without-lazy/eagerly-component/eagerly-component.component';

const routes: Routes = [{ path: 'with-lazy', loadChildren: () => import('./with-lazy/with-lazy.module').then(m => m.WithLazyModule) }, {
  path: 'without-lazy',
  component: EagerlyComponentComponent  // Eagerly-loaded module
},];

@NgModule({
  // declarations: [
  //   EagerlyComponentComponent
  // ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
