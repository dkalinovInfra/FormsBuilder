import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CustomerDto } from '../models/north-wind-api/customer-dto';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthWindAPIService {
  constructor(
    private http: HttpClient
  ) { }

  public getCustomerDto(id: string): Observable<CustomerDto | undefined> {
    if (!id) {
      return of(undefined);
    }
    return this.http.get<CustomerDto | undefined>(`${API_ENDPOINT}/Customers/${id}`)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDto | undefined>('getCustomerDto', undefined)));
  }

  public putCustomerDto(data: any): Observable<CustomerDto | undefined> {
    if (!data) {
      return of(undefined);
    }
    const body = data;
    return this.http.put<CustomerDto | undefined>(`${API_ENDPOINT}/Customers`, body)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDto | undefined>('putCustomerDto', undefined)));
  }

  public postCustomerDto(data: any): Observable<CustomerDto | undefined> {
    if (!data) {
      return of(undefined);
    }
    const body = data;
    return this.http.post<CustomerDto | undefined>(`${API_ENDPOINT}/Customers`, body)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDto | undefined>('postCustomerDto', undefined)));
  }
}
