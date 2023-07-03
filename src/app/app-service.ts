import { HttpBackend, HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class AppService {

constructor(private http: HttpClient) {

}
getUsers() {
    const url = "http://localhost:5009/api/User/GetUsers"
    return this.http.get<any>(url);
}
userLogin (body: any){
    const url = "http://localhost:5009/api/User/ValidateUser"
        return this.http.post<any>(url, body);


}
}