import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iProduct } from '../interfaces/iProduct';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = environment.api;

  constructor(private httpClient: HttpClient) {
   }

  findAll() {
    return this.httpClient.get<iProduct[]>(`${this.url}products`)
  }
}
