import { Injectable } from "@angular/core";
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { headersToString } from "selenium-webdriver/http";
import { CATCH_ERROR_VAR } from "@angular/compiler/src/output/abstract_emitter";
@Injectable()

export class dataApi{
    urlPost: string = "https://solfront.eu-gb.mybluemix.net/v1/1/boat"

    constructor(private _http: Http, private http2: Http){
        

    }
    getBoats(){ 
       const _headers = new Headers();
       _headers.append('X-Api-Token', '132');
       _headers.append('X-Api-Key','135')
        return this._http.get("https://solfront.eu-gb.mybluemix.net/v1/0/boats", {headers:_headers})
        .map((response: Response) => response.json());    
    }

    setPresence(_boatId:string,_Present:string){
       return this._http.post(this.urlPost + _boatId + "/", _Present)   
    }

    changerLaPresence(){
        console.log("avant envoi");
        var _headers = new Headers();
       _headers.append('X-Api-Token', '8');
       _headers.append('X-Api-Key','7')
       _headers.append('Content-Type','application/json');
       
        console.log("PUT appelé");
        return this.http2.put("https://solfront.eu-gb.mybluemix.net/v1/1/boat/2", {"present": 1, "consume": 1}, {headers: _headers});
       // return this._http.get("https://solfront.eu-gb.mybluemix.net/v1/0/boats", {headers:_headers})
       
    }
    


}