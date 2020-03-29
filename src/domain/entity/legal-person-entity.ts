import { DomainBuilder } from 'ts-generic-builder';
import { Person, PersonEntity } from './person-entity';

interface LegalPerson extends Person {
    readonly name?: string;
}

export class LegalPersonEntity extends PersonEntity implements LegalPerson {
    private _name?: string;

    constructor(builder: DomainBuilder<LegalPerson, LegalPersonEntity> & LegalPerson) {
        super(builder);

        this._name = builder.name;
    }

    get name(): string | undefined {
        return this._name;
    }

    validate(): boolean {
        let result = true;
        result = result && this._name != null ? this._name.trim().length > 0 : result;

        return result;
    }
}
