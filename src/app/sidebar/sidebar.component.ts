import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [DataService]
})
export class SidebarComponent implements OnInit {

  public global:any = {};

  constructor(public dataService:DataService) { }

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

}
