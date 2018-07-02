import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  private coinUrl: string = "https://api.coinmarketcap.com/v2/ticker/"
  private apiUrl: string = "https://api.thecoins.top/api";

  constructor(private http: HttpClient) { }

  getCoins(start: number, limit: number): Observable<any> {
    let params = new HttpParams().set("start", start.toString()).set("limit", limit.toString()).set("structure", "array").set("convert", "CNY");
    return this.http.get(this.coinUrl, { params: params });
  }

  getExchangeDetail(name: string): Observable<any> {
    return this.http.get(this.apiUrl + '/exchange/' + name);
  }

  getExchanges(start: number, count: number, limit: number): Observable<any> {
    let params = new HttpParams().set("start", start.toString()).set("size", count.toString()).set("limit",limit.toString());
    return this.http.get(this.apiUrl + '/exchange', { params: params });
  }

  getCoinInfo(start: number, count: number): Observable<any> {
    let params = new HttpParams().set("start", start.toString()).set("count", count.toString());
    return this.http.get(this.apiUrl + '/coin', { params: params });
  }



}
