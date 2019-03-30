export interface Link {
    params?: {
        [key: string]: string;
    };
    rel?: string;
    rels?: string[];
    title?: string;
    type?: string;
    uri?: string;
    uriBuilder?: {
        [key: string]: any;
    };
}
