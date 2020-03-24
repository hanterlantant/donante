import { App } from './app';
import { Configuration } from './config/config';
import { DevelopmentConfiguration } from './config/config.dev';
import { ProductionConfiguration } from './config/config.prod';

let configuration: Configuration;

switch (process.env.NODE_ENV) {
    case 'development':
        configuration = new DevelopmentConfiguration();
        break;
    case 'production':
        configuration = new ProductionConfiguration();
        break;
    default:
        throw new Error('Keine Konfiguration angegegben!');
}

const app = new App(configuration);
app.start();
