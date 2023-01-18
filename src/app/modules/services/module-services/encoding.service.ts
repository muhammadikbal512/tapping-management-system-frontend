import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EncodingModel } from 'src/app/model/modules-model/encoding.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EncodingService {
  apiUrl: string = environment.core236;
  constructor(private http: HttpClient) {}

  getAllEncoding() {
    return this.http.get<HttpResponseData<EncodingModel>>(
      `${this.apiUrl}/encoding/getAll`
    );
  }
}
