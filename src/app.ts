import express, { Express } from 'express';
import Nano from 'nano';
import { Configuration } from './config/config';

export class App {
    private server!: Express;
    private nano: Nano.ServerScope;

    constructor(private configuration: Configuration) {
        this.nano = Nano(configuration.getDbConnectionUrl());
    }

    async start(): Promise<Express> {
        return this.startHttpServer();
    }

    private startHttpServer(): Promise<Express> {
        return new Promise(resolve => {
            this.server = express();
            this.server.listen(this.configuration.serverPort, () => {
                console.log('server running on *:' + this.configuration.serverPort);
                resolve(this.server);
            });
        });
    }
}
