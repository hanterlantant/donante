import { DomainBuilder } from 'ts-generic-builder';
import { Person, PersonEntity } from './person-entity';

interface NaturalPerson extends Person {
    readonly title?: string;
    readonly degree?: string;
    readonly firstname?: string;
    readonly surname?: string;
    readonly birthday?: Date;
}

export class NaturalPersonEntity extends PersonEntity implements NaturalPerson {
    private _title?: string;
    private _degree?: string;
    private _firstname?: string;
    private _surname?: string;
    private _birthday?: Date;

    constructor(builder: DomainBuilder<NaturalPerson, NaturalPersonEntity> & NaturalPerson) {
        super(builder);

        this._title = builder.title;
        this._degree = builder.degree;
        this._firstname = builder.firstname;
        this._surname = builder.surname;
        this._birthday = builder.birthday;
    }

    get title(): string | undefined {
        return this._title;
    }
    get degree(): string | undefined {
        return this._degree;
    }
    get firstname(): string | undefined {
        return this._firstname;
    }
    get surname(): string | undefined {
        return this._surname;
    }
    get birthday(): Date | undefined {
        return this._birthday;
    }

    validate(): boolean {
        let result = true;
        result = result && this._title != null ? this._title.trim().length > 0 : result;
        result = result && this._degree != null ? this._degree.trim().length > 0 : result;
        result = result && this._firstname != null ? this._firstname.trim().length > 0 : result;
        result = result && this._surname != null ? this._surname.trim().length > 0 : result;
        result = result && this._birthday != null ? this._birthday < new Date() : result;

        return result;
    }
}
