import { Configuration } from './config';

export class ProductionConfiguration extends Configuration {
    dbHost = '127.0.0.1';
    dbPort = 5984;
    dbName = 'blaupause';
    serverPort = 8080;

    get dbUser(): string {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return process.env.DB_USER!;
    }

    get dbPassword(): string {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return process.env.DB_PASSWORD!;
    }
}
