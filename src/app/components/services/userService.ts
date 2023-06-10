import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
  })

export class userService {
    constructor(private http: HttpClient) {

    }
    public login(body: any ) {
        return this.http.post('http://localhost:8080/user/auth/login',body ).subscribe
        (result => {
            let value=''
            if(result.hasOwnProperty('token')){
                Object.entries(result).forEach(x => {
                    let key = x[0]
                     value = x[1];
                    console.log(value)
                 })
                localStorage.setItem('token', value)
            }
        });
    }

    public testZaInterceptor(){
        return this.http.post('http://localhost:8080/product/products',{
            "id": 3403,
            "name": "string",
            "color": "string",
            "sastav": "string",
            "state": [],
            "category": {
              "id": 152,
              "naziv": "Kategorija"
            },
            "spol": "string",
            "rezrevacijaId": 0
          })
    }
}