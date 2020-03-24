import { Configuration } from './config';

export class DevelopmentConfiguration extends Configuration {
    dbHost = '127.0.0.1';
    dbPort = 5984;
    dbName = 'blaupause_test';
    dbUser = 'blautest';
    dbPassword = 'bt';
    serverPort = 8080;
}
