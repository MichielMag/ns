import { APIMessage } from "./domain/api-message";
import { Subject } from "rxjs";

export interface IHttp
{
    get<T>(url : string, params : any, contentType? : string) : Subject<APIMessage<T>>;
}