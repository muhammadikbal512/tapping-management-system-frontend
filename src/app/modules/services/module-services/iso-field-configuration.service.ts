import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Iso8583FieldModel } from 'src/app/model/modules-model/iso8583-field.model';


@Injectable({
  providedIn: 'root'
})
export class IsoFieldConfigurationService {
  apiUrl = environment.core236

  constructor(private http: HttpClient) { }

  getAllIsoFieldConfiguration() {
    return this.http.get<Iso8583FieldModel[]>(`${this.apiUrl}/IsoFieldConfiguration/list`)
  }

  addIsoFieldConfiguration(data: any, id: number) {
    return this.http.post<Iso8583FieldModel[]>(`${this.apiUrl}/IsoFieldConfiguration/` + id + `/add`, data)
  }
}
