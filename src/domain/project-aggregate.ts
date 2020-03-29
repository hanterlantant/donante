import { DomainBuilder, Validatable } from 'ts-generic-builder';

interface Project extends Validatable {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly costs: number;
    readonly city: string;
    readonly begin: Date;
    readonly end?: Date;
    readonly gpsLongitude?: string;
    readonly gpsLatitude?: string;
}

export class ProjectAggregate implements Project {
    private _id: string;
    private _name: string;
    private _description: string;
    private _costs: number;
    private _city: string;
    private _begin: Date;
    private _end?: Date;
    private _gpsLongitude?: string;
    private _gpsLatitude?: string;

    constructor(builder: DomainBuilder<Project, ProjectAggregate> & Project) {
        this._id = builder.id;
        this._name = builder.name;
        this._description = builder.description;
        this._costs = builder.costs;
        this._city = builder.city;
        this._begin = builder.begin;
        this._end = builder.end;
        this._gpsLongitude = builder.gpsLongitude;
        this._gpsLatitude = builder.gpsLatitude;
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get description(): string {
        return this._description;
    }
    get costs(): number {
        return this._costs;
    }
    get city(): string {
        return this._city;
    }
    get begin(): Date {
        return this._begin;
    }
    get end(): Date | undefined {
        return this._end;
    }
    get gpsLongitude(): string | undefined {
        return this._gpsLongitude;
    }
    get gpsLatitude(): string | undefined {
        return this._gpsLatitude;
    }

    validate(): boolean {
        let result = true;
        result = result && this._name.trim().length > 0;
        result = result && this._description.trim().length > 0;
        result = result && this._city.trim().length > 0;
        result = result && this._costs >= 0;

        return result;
    }
}
