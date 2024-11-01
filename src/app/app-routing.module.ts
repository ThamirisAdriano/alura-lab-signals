import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';
import { ObservablesComponent } from './observables/observables.component';
import { EffectsDemoComponent } from './effects-demo/effects-demo.component';
import { ElementListComponent } from './element-list/element-list.component';
import { ElementDetailsComponent } from './element-details/element-details.component';
import { OptimizedComponent } from './optimized/optimized.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { ItemCounterComponent } from './item-counter/item-counter.component';


const routes: Routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' }, 
  { path: 'intro', component: SignalsIntroComponent }, 
  { path: 'effects-demo', component: EffectsDemoComponent },
  { path: 'optimized', component: OptimizedComponent },
  { path: 'computed-signal', component: ComputedSignalComponent }, 
  { path: 'click-counter', component: ClickCounterComponent }, 
  { path: 'item-counter', component: ItemCounterComponent }, 
  {
    path: 'elements', 
    children: [
      { path: '', component: ElementListComponent, outlet: 'list' },
      { path: '', component: ElementDetailsComponent, outlet: 'details' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }