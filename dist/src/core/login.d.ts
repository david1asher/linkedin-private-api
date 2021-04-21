import { Client } from './client';
export declare class Login {
    private client;
    constructor({ client }: {
        client: Client;
    });
    private setRequestHeaders;
    userPass({ username, password, useCache, }: {
        username: string;
        password?: string;
        useCache?: boolean;
    }): Promise<Client>;
}
