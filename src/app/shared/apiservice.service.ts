import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpclient: HttpClient) { }

  
    

//function which passes http response
  getuserdata(){
    // initialising http header
    let httpheaders= new HttpHeaders({
      'Authorization':  'Bearer key3GnfHvdYoWedr5',
    
    });
    //httpheaders = httpheaders.set('Idsa','23');  // custom headers
    let url=  environment.apidomainget +'v0/appzoLh5b0y8mV3WF/Angular-Test-Users'
    return this.httpclient.get(url,{headers: httpheaders})
  }

}
