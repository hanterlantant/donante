import { Builder, Validatable } from 'ts-generic-builder';
import { PersonEntity } from './person-entity';

export class NaturalPersonEntity extends PersonEntity implements Validatable {
    public readonly title?: string;
    public readonly degree?: string;
    public readonly firstname?: string;
    public readonly surname?: string;
    public readonly birthday?: Date;

    constructor(builder: Builder<NaturalPersonEntity> & NaturalPersonEntity) {
        super(builder);

        this.title = builder.title;
        this.degree = builder.degree;
        this.firstname = builder.firstname;
        this.surname = builder.surname;
        this.birthday = builder.birthday;
    }

    validate(): boolean {
        let result = true;
        result = result && this.title != null ? this.title.trim().length > 0 : result;
        result = result && this.degree != null ? this.degree.trim().length > 0 : result;
        result = result && this.firstname != null ? this.firstname.trim().length > 0 : result;
        result = result && this.surname != null ? this.surname.trim().length > 0 : result;
        result = result && this.birthday != null ? this.birthday < new Date() : result;

        return result;
    }
}
