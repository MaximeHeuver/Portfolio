import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './reusable-components/nav-bar/nav-bar.component';
import { AlgorithmsComponent } from './pages/algorithms/algorithms.component';
import { AboutComponent } from './pages/about/about.component';
import { WaveFunctionCollapseComponent } from './pages/algorithms/wave-function-collapse/wave-function-collapse.component';
import { SliderComponent } from './reusable-components/slider/slider.component';
import { DropdownComponent } from './reusable-components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AlgorithmsComponent,
    AboutComponent,
    WaveFunctionCollapseComponent,
    SliderComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
