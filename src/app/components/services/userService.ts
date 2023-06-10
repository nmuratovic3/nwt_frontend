import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})

export class userService {
    constructor(private http: HttpClient) {

    }
    public login(body: any) {
        return this.http.post('http://localhost:8080/user/auth/login', body).subscribe
            (result => {
                let value = ''
                if (result.hasOwnProperty('token')) {
                    Object.entries(result).forEach(x => {
                        let key = x[0]
                        value = x[1];
                    })
                    localStorage.setItem('token', value)
                }
            });
    }

    public register(body: any) {
        return this.http.post('http://localhost:8080/user/auth/register', body).subscribe
            (result => {
                console.log(result)
            })
    }

    public validateToken() {
        return this.http.post('http://localhost:8080/user/auth/validate', { email: "", token: localStorage.getItem('token') }).subscribe
            (result => {
                console.log(result)
                Object.entries(result).forEach(x => {
                    let key = x[0]
                    let value = x[1];
                    if (key == 'email') {
                        localStorage.setItem('userEmail', value)
                    }
                })
            })
    }
    public logout(){
        localStorage.clear()
    }

    public getCurrentUser(){
        let email=localStorage.getItem('userEmail');
        let token=localStorage.getItem('token');
        return this.http.get<any>('http://localhost:8080/user/custom-user/'+email, { headers: new HttpHeaders({'Authorization': 'Bearer ' + token})})
    }
}