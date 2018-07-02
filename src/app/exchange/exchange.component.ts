import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ClrDatagridStateInterface } from "@clr/angular";

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
  providers: [DataService]
})
export class ExchangeComponent implements OnInit {

  public exchanges: Array<number>;

  private limit: number = 144; //趋势范围，频率5分钟一次，12次一小时，144为12小时

  private start: number = 0;  //分页，起始
  public current: number = 1; //分页，当前页
  public size: number = 20;   //分页，每页个数
  public total: number = 0;   //分页，总数

  public loading: boolean = false; //加载中

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getExchages(this.start, this.size);
  }

  public parse(source) {
    return JSON.parse(source)
  }

  refresh(state: ClrDatagridStateInterface) {
    // console.log(state.page)
    this.getExchages(state.page.from, state.page.size);
  }

  private getExchages(start, size) {
    this.loading = true;
    this.dataService.getExchanges(start, size, this.limit).subscribe((res) => {
      this.loading = false;
      this.exchanges = res.data;
      this.total = res.total;
    }, (err) => {

    });
  }

}
