import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Utils } from '../utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [DataService]
})
export class SidebarComponent implements OnInit {

  public global:any = {};

  constructor(public dataService:DataService, public translate: TranslateService) { }

  ngOnInit() {
    this.getGlobal();
  }

  private getGlobal() {
    this.dataService.getGlobal().subscribe((res) => {
      // console.log(res)
      if (res.code == 200){
        this.global = res.data;
      }
      
    }, (err) => {

    });
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

}
