import { Builder, Validatable } from 'ts-generic-builder';

export class ProjectEntity implements Validatable {
    public readonly id: string;
    public readonly name: string;
    public readonly description: string;
    public readonly costs: number;
    public readonly city: string;
    public readonly begin: Date;
    public readonly end?: Date;
    public readonly gpsLongitude?: string;
    public readonly gpsLatitude?: string;

    constructor(builder: Builder<ProjectEntity> & ProjectEntity) {
        this.id = builder.id;
        this.name = builder.name;
        this.description = builder.description;
        this.costs = builder.costs;
        this.city = builder.city;
        this.begin = builder.begin;
        this.end = builder.end;
        this.gpsLongitude = builder.gpsLongitude;
        this.gpsLatitude = builder.gpsLatitude;
    }

    validate(): boolean {
        let result = true;
        result = result && this.name.trim().length > 0;
        result = result && this.description.trim().length > 0;
        result = result && this.city.trim().length > 0;
        result = result && this.costs >= 0;

        return result;
    }
}
