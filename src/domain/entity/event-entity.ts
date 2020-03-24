import { Builder, Validatable } from 'ts-generic-builder';

export class EventEntity implements Validatable {
    public readonly id: string;
    public readonly name: string;
    public readonly description: string;
    public readonly date: Date;

    constructor(builder: Builder<EventEntity> & EventEntity) {
        this.id = builder.id;
        this.name = builder.name;
        this.description = builder.description;
        this.date = builder.date;
    }

    validate(): boolean {
        let result = true;
        result = result && this.name.trim().length > 0;
        result = result && this.description.trim().length > 0;

        return result;
    }
}
