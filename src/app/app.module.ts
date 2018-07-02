import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http'
import { TrendModule } from 'ngx-trend';
import * as highstock from 'highcharts/modules/stock.src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeDetailComponent } from './exchange-detail/exchange-detail.component';
import { ROUTING } from "./app.routing";
import { NumbersDigitsPipe } from './numbers-digits.pipe';
import { NumbersWithCommasPipe } from './numbers-with-commas.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExchangeComponent,
    ExchangeDetailComponent,
    NumbersDigitsPipe,
    NumbersWithCommasPipe
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ChartModule,
    ROUTING,
    HttpClientModule,
    TrendModule
  ],
  providers: [{
    provide: HIGHCHARTS_MODULES, useFactory: () => [highstock]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
