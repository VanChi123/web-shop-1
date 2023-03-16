import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  /**
   * Get list products
   * @param params pagination, filter..
   * @returns Observable
   * @author ChiBV
   */
  getProductList(params: any): Observable<any> {
    const payload = {body: params};

    return this.http
      // .post<any>(`${environment.apiUri.shop}/product/find-all`, payload)
      .get<any>(`${environment.apiUri.shop}/product/find-all`)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }
}
