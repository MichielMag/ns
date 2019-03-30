import { IHttp } from './i-http';
import { APIMessage } from './domain/api-message';
import { Subject } from 'rxjs';
export declare class Http implements IHttp {
    private token;
    private headers;
    private readonly OCP_APIM_SUBSCRIPTION_KEY;
    private readonly ACCEPT;
    private readonly USER_AGENT;
    private readonly APPLICATION_JSON;
    private readonly USER_AGENT_VALUE;
    constructor(token: string);
    get<T>(url: string, params: any, contentType?: string): Subject<APIMessage<T>>;
}
