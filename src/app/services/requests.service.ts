import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataResponseType} from "../../types/dataResponseType.type";
import {DefaultResponseType} from "../../types/defaultResponse.type";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient ) {

  }

  getProducts(): Observable<DataResponseType | DefaultResponseType> {
    return this.http.get<DataResponseType | DefaultResponseType>('https://192.168.115.14:4436/banksite/dicts/products')
  }

  getRegions(): Observable<DataResponseType | DefaultResponseType> {
    return this.http.get<DataResponseType | DefaultResponseType>('https://pay.tawhid.tj:4436/banksite/dicts/regions')
  }

  getApplicationType(): Observable<DataResponseType | DefaultResponseType> {
    return this.http.get<DataResponseType | DefaultResponseType>('https://192.168.115.14:4436/banksite/dicts/apps')
  }

  depositRequest(appId: number | string, fullName: string, mobileNumber: string, cityId: number | string, email: string, prodId: number): Observable<DefaultResponseType> {

    return this.http.post<DefaultResponseType>(environment.api + 'deposit',
      {
        appId: appId,
        fullName: fullName,
        mobileNumber: mobileNumber,
        cityId: cityId,
        email: email,
        productId: prodId
      },
    )
  }

  cardRequest(appId: number | string, fullName: string, mobileNumber: string, cityId: number | string, email: string, prodId: number): Observable<DefaultResponseType> {

    return this.http.post<DefaultResponseType>(environment.api + 'cards',
      {
        appId: appId,
        fullName: fullName,
        mobileNumber: mobileNumber,
        cityId: cityId,
        email: email,
        productId: prodId
      },
    )
  }

  autoRequest(appId: number | string, fullName: string, mobileNumber: string, prodId: number): Observable<DefaultResponseType> {

    return this.http.post<DefaultResponseType>(environment.api + 'financing',
      {
        appId: appId,
        fullName: fullName,
        mobileNumber: mobileNumber,
        productId: prodId
      },
    )
  }

  businessAccountRequest(appId: number | string, fullName: string, mobileNumber: string, cityId: number | string, email: string, prodId: number, company: string): Observable<DefaultResponseType> {
    return this.http.post<DefaultResponseType>(environment.api + 'consulting',
      {
        appId: appId,
        productId: prodId,
        fullName: fullName,
        mobileNumber: mobileNumber,
        email: email,
        company: company,
        cityId: cityId
      },
    )
  }

  jobRequest(appId: number | string, fullName: string, mobileNumber: string, text:  string, prodId: number, agree: boolean): Observable<DefaultResponseType> {
    let uuid = localStorage.getItem('fileUuid');

    return this.http.post<DefaultResponseType>(environment.api + 'jobs',
      {
        appId: appId,
        productId: prodId,
        fullName: fullName,
        mobileNumber: mobileNumber,
        text: text,
        cvFile: uuid,
        agree: agree
      }
    )
  }

  supportRequest(appId: number | string, fullName: string, mobileNumber: string, topic:  string, prodId: number, question: string): Observable<DefaultResponseType> {
    return this.http.post<DefaultResponseType>(environment.api + 'support',
      {
        appId: appId,
        productId: prodId,
        fullName: fullName,
        mobileNumber: mobileNumber,
        topic: topic,
        question: question
      }
    )
  }

  solvencyCheckRequest(tin: number | string, mobileNumber: string): Observable<DefaultResponseType | DataResponseType> {
    return this.http.post<DefaultResponseType | DataResponseType>(environment.api + 'financing/solvency_check_request',
      {
        tin: tin,
        mobileNumber: mobileNumber,
      }
    )
  }

  solvencyCheckOtpVerifyRequest(tin: number | string, mobileNumber: string, otp: string): Observable<DefaultResponseType | DataResponseType> {
    return this.http.post<DefaultResponseType | DataResponseType>(environment.api + 'financing/solvency_check_verify',
      {
        tin: tin,
        mobileNumber: mobileNumber,
        otp: otp
      }
    )
  }

  financingRequest(productId: number | string,
                   surname: string,
                   name: string,
                   fathersName: string,
                   mobileNumber: string,
                   email: string,
                   birthDate: string,
                   agree: boolean): Observable<DefaultResponseType | DataResponseType> {
    return this.http.post<DefaultResponseType | DataResponseType>(environment.api + 'financing/solvency_check_verify',
      {
        productId: productId,
        surname: surname,
        name: name,
        fathersName: fathersName,
        mobileNumber: mobileNumber,
        email: email,
        birthDate: birthDate,
        agree: agree
      }
    )
  }


}
