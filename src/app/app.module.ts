import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TrendModule } from 'ngx-trend';
import { FormsModule } from '@angular/forms'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import * as highstock from 'highcharts/modules/stock.src';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeDetailComponent } from './exchange-detail/exchange-detail.component';
import { ROUTING } from "./app.routing";
import { SidebarComponent } from './sidebar/sidebar.component';

import { Config } from './config';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExchangeComponent,
    ExchangeDetailComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ChartModule,
    ROUTING,
    HttpClientModule,
    TrendModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })

  ],
  providers: [{
    provide: HIGHCHARTS_MODULES, useFactory: () => [highstock]
  }, Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
