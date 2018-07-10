import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockChart } from 'angular-highcharts';
import { DataService } from '../data.service';
import { Config } from '../config';
@Component({
  selector: 'app-exchange-detail',
  templateUrl: './exchange-detail.component.html',
  styleUrls: ['./exchange-detail.component.scss'],
  providers: [DataService]
})
export class ExchangeDetailComponent implements OnInit {

  public exchange: any = {};
  public chart: any = {};
  constructor(private route: ActivatedRoute, private dataservice: DataService, private config: Config) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.dataservice.getExchangeDetail(id).subscribe(res => {
      console.log(res)
      if (res.code === 200) {
        this.exchange.info = res.info[0];
        // this.chart.series[0].data = res.volume;
        let chartOption = this.config.highchartsConfig;
        chartOption.series = [];
        chartOption.series.push({
          name: 'Line 1',
          data: res.volume
        })
        this.chart = new StockChart(<any>chartOption);
      }
    }, err => {

    })
  }


}
