export abstract class Configuration {
    abstract get dbHost(): string;
    abstract get dbPort(): number;
    abstract get dbName(): string;
    abstract get dbUser(): string;
    abstract get dbPassword(): string;
    abstract get serverPort(): number;

    getDbConnectionUrl(): string {
        return `http://${this.dbUser}:${this.dbPassword}@${this.dbHost}:${this.dbPort}`;
    }
}
