import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';
import { ObservablesComponent } from './observables/observables.component';
import { EffectsDemoComponent } from './effects-demo/effects-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' }, 
  { path: 'intro', component: SignalsIntroComponent }, 
  { path: 'observables', component: ObservablesComponent }, 
  { path: 'effects-demo', component: EffectsDemoComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }