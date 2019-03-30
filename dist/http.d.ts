import { IHttp } from "./i-http";
import { APIMessage } from "./domain/api-message";
import { Subject } from 'rxjs';
export declare class Http implements IHttp {
    private token;
    private headers;
    constructor(token: string);
    get<T>(url: string, params: any, contentType?: string): Subject<APIMessage<T>>;
}
