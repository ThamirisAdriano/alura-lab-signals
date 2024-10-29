import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';
import { ObservablesComponent } from './observables/observables.component';
import { EffectsDemoComponent } from './effects-demo/effects-demo.component';
import { ElementListComponent } from './element-list/element-list.component';
import { ElementDetailsComponent } from './element-details/element-details.component';
import { OptimizedComponent } from './optimized/optimized.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsIntroComponent,
    ObservablesComponent,
    EffectsDemoComponent,
    ElementListComponent,
    ElementDetailsComponent,
    OptimizedComponent,
    ComputedSignalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
