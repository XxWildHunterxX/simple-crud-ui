import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseApiURL = environment.baseApiURL + 'User/';

@Injectable()
export class UserApiService {

    constructor(private httpClient: HttpClient) { }

    public post(body: any) {
        return this.httpClient.post(baseApiURL, body)
    }

    public deactivate(body: any) {
        return this.httpClient.post(baseApiURL + 'deactivate', body)
    }

    public recover(body: any) {
        return this.httpClient.post(baseApiURL + 'recover', body)
    }

    public put(body: any) {
        return this.httpClient.put(baseApiURL, body)
    }

    public get(id: number) {
        return this.httpClient.get(baseApiURL + "?id=" + id)
    }


    public query(body: any) {
        return this.httpClient.post(baseApiURL + 'queryUsers', body)
    }


}
