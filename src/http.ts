import { IHttp } from "./i-http";
import { APIMessage } from "./domain/api-message";

import { Subject } from 'rxjs'

import * as https from 'https';
import { OutgoingHttpHeaders, IncomingMessage } from "http";
import * as querystring from 'querystring';


export class Http implements IHttp
{
    private token : string;
    private headers : OutgoingHttpHeaders = {};

    constructor(token : string)
    {
        this.token = token;
        this.headers["Ocp-Apim-Subscription-Key"] = token;
    }

    get<T>(url: string, params: any): Subject<APIMessage<T>> {
        var subject = new Subject<APIMessage<T>>();
        var query = querystring.stringify(params);
        var uri = url;
        if (query !== null && query.length > 0)
        {
            url += "?" + query;
        }
        var request = https.get(url, {headers: this.headers}, (res : IncomingMessage) => {
            var json : string = "";
            res.on('data', (data : any) => {
                json += data;
            });
            res.on('end', () => {
                subject.next(JSON.parse(json));
            })
            res.on('error', (err : Error) => {
                subject.error(err);
            })
        });

        request.on('error', (err : Error) => {
            subject.error(err);
        });
        return subject;
    }   
}