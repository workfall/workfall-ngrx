import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type GetCoinsQueryParams = workfall.models.GetCoinsQueryParams;
export type GetCoinsRes = workfall.models.GetCoinsRes;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://coinranking1.p.rapidapi.com/coins'
  params = {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '10',
    offset: '0'
  }

  constructor(
    private http: HttpClient
  ) { }

  getCoins(filters: GetCoinsQueryParams = this.params): Observable<GetCoinsRes> {
    let httpParams = new HttpParams({ fromObject: filters })
    return this.http.get<GetCoinsRes>(`${this.apiUrl}?${httpParams}`)
  }
}
