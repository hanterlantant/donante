import { DomainBuilder, Validatable } from 'ts-generic-builder';

interface Event extends Validatable {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly date: Date;
}

export class EventAggregate implements Event {
    private _id: string;
    private _name: string;
    private _description: string;
    private _date: Date;

    constructor(builder: DomainBuilder<Event, EventAggregate> & Event) {
        this._id = builder.id;
        this._name = builder.name;
        this._description = builder.description;
        this._date = builder.date;
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
    get date(): Date {
        return this._date;
    }

    validate(): boolean {
        let result = true;
        result = result && this.name.trim().length > 0;
        result = result && this.description.trim().length > 0;

        return result;
    }
}
