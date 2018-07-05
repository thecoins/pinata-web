import { Component } from '@angular/core';
// import { Chart } from 'angular-highcharts';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public lang: string = 'en';

  constructor(public translate: TranslateService){
    translate.setDefaultLang('en');

     translate.use('en');
  }

  changeLang(lang){
    this.translate.use(lang);
  }

  // title = 'app';
  // chart = new Chart({
  //   chart: {
  //     type: 'line'
  //   },
  //   title: {
  //     text: 'Linechart'
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   series: [
  //     {
  //       name: 'Line 1',
  //       data: [1, 2, 3]
  //     }
  //   ]
  // });

  
}
