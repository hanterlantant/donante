import { Builder, Validatable } from 'ts-generic-builder';
import { PersonEntity } from './person-entity';

export class LegalPersonEntity extends PersonEntity implements Validatable {
    public readonly name?: string;

    constructor(builder: Builder<LegalPersonEntity> & LegalPersonEntity) {
        super(builder);

        this.name = builder.name;
    }

    validate(): boolean {
        let result = true;
        result = result && this.name != null ? this.name.trim().length > 0 : result;

        return result;
    }
}
