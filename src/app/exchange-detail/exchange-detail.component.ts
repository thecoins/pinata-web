import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockChart } from 'angular-highcharts';
import { DataService } from '../data.service';

@Component({
  selector: 'app-exchange-detail',
  templateUrl: './exchange-detail.component.html',
  styleUrls: ['./exchange-detail.component.scss'],
  providers: [DataService]
})
export class ExchangeDetailComponent implements OnInit {

  public exchange: any = {};
  public chart: any = {}; 
  constructor(private route: ActivatedRoute, private dataservice: DataService) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.dataservice.getExchangeDetail(id).subscribe(res => {
      console.log(res)
      if (res.code === 200) {
        this.exchange.info = res.info[0];
        // this.chart.series[0].data = res.volume;
        this.chart = new StockChart({
          chart: {
            type: 'line'
          },
          title: {
            text: 'Linechart'
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: 'Line 1',
              data: res.volume
            }
          ]
        });
      }
    }, err => {

    })
  }


}
