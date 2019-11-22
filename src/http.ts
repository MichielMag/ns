import { IHttp } from './i-http';
import { APIMessage } from './domain/api-message';

import { Subject } from 'rxjs';

import * as https from 'https';
import { OutgoingHttpHeaders, IncomingMessage } from 'http';
import * as querystring from 'querystring';

export class Http implements IHttp {
	private token: string;
	private headers: OutgoingHttpHeaders = {};

	private readonly OCP_APIM_SUBSCRIPTION_KEY = 'Ocp-Apim-Subscription-Key';
	private readonly ACCEPT = 'Accept';
	private readonly USER_AGENT = 'User-Agent';
	private readonly APPLICATION_JSON = 'application/json';
	private readonly USER_AGENT_VALUE = 'node-ns-api - https://github.com/MichielMag/node-ns-api';

	constructor(token: string) {
		this.token = token;
		this.headers[this.OCP_APIM_SUBSCRIPTION_KEY] = token;
		this.headers[this.ACCEPT] = this.APPLICATION_JSON;
		this.headers[this.USER_AGENT] = this.USER_AGENT_VALUE;
	}

	public get<T>(url: string, params: any, contentType?: string): Subject<T> {
		const subject = new Subject<T>();
		const query = querystring.stringify(params);
		let uri = url;
		if (query !== null && query.length > 0) {
			uri += '?' + query;
		}

		const requestHeaders = this.headers;
		if (contentType !== undefined && contentType !== null) {
			requestHeaders[this.ACCEPT] = contentType;
		}

		const request = https.get(uri, { headers: requestHeaders }, (res: IncomingMessage) => {
			let json: string = '';
			res.on('data', (data: any) => {
				json += data;
			});
			res.on('end', () => {
				const obj = JSON.parse(json);
				if (obj.errors !== undefined) {
					subject.error(obj);
				} else {
					subject.next(JSON.parse(json));
				}
			});
			res.on('error', (err: Error) => {
				subject.error(err);
			});
		});

		request.on('error', (err: Error) => {
			subject.error(err);
		});
		return subject;
	}
}
