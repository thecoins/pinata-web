import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ClrDatagridStateInterface } from "@clr/angular";
import { TranslateService } from '@ngx-translate/core';
import { Utils } from '../utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  private start: number = 0;  //分页，起始
  public current: number = 1; //分页，当前页
  public size: number = 30;   //分页，每页个数
  public total: number = 0;   //分页，总数
  public coins: Array<any>;
  // public coininfo: Array<any>;
  public loading: boolean = false; //加载中

  constructor(private dataService: DataService, public translate: TranslateService) { }

  ngOnInit() {
    this.getCoins(this.start, this.size);
    // this.getCoininfo();
  }

  refresh(state: ClrDatagridStateInterface) {
    // console.log(state.page)
    this.getCoins(state.page.from, state.page.size);
  }

  private getCoins(start, limit) {
    this.dataService.getCoins(start, limit).subscribe((res) => {
      // console.log(res)
      this.coins = this.convert(res.data);
      this.total = res.metadata.num_cryptocurrencies;
    }, (err) => {

    });
  }

  public upordown(number) {
    if (parseFloat(number) > 0) {
      return 'change up';
    }
    else {
      return 'change down';
    }
  }

  public market(marketcny, marketusd) {

    if (this.translate.currentLang == 'en') {
      let bits = Utils.enBits(marketusd)
      return '$' + (marketusd / bits.digits).toFixed(2) + bits.symbol
    }
    else {
      let bits = Utils.zhBits(marketcny)
      return '￥' + (marketcny / bits.digits).toFixed(2) + bits.symbol
    }
  }

  public price(pricecny,priceusd){
    if (this.translate.currentLang == 'en'){
      return '$' + priceusd
    }
    else{
      if (pricecny < 1) {
        return '￥' + pricecny.toFixed(6);
      }
      else if (pricecny > 100) {
        return '￥' + pricecny.toFixed(2);
      }
      else {
        return '￥' + pricecny.toFixed(4);
      }
    }
  }

  public supply(supply){
    if (this.translate.currentLang == 'en') {
      let bits = Utils.enBits(supply)
      return '$' + (supply / bits.digits).toFixed(2) + bits.symbol
    }

    else {
      let bits = Utils.zhBits(supply)
      return '￥' + (supply / bits.digits).toFixed(2) + bits.symbol
    }
  }

  public volume(volumecny, volumeusd) {
    if (this.translate.currentLang == 'en') {
      let bits = Utils.enBits(volumeusd)
      return '$' + (volumeusd / bits.digits).toFixed(2) + bits.symbol
    }

    else {
      let bits = Utils.zhBits(volumecny)
      return '￥' + (volumecny / bits.digits).toFixed(2) + bits.symbol
    }
  }

  private convert(source) {
    let results: Array<any> = [];
    source.forEach((value, key) => {
      results.push(value);
    });
    return results;
  }

}
