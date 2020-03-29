import { DomainBuilder, Validatable } from 'ts-generic-builder';
import { AddressVo } from '../vo/address-vo';
import { ContactVo } from '../vo/contact-vo';

export interface Person extends Validatable {
    readonly id: string;
    readonly address?: AddressVo;
    readonly contact?: ContactVo;
}
export abstract class PersonEntity implements Person {
    private _id: string;
    private _address?: AddressVo;
    private _contact?: ContactVo;

    protected constructor(builder: DomainBuilder<Person, PersonEntity> & Person) {
        this._id = builder.id;
        this._address = builder.address;
        this._contact = builder.contact;
    }

    get id(): string {
        return this._id;
    }
    get address(): AddressVo | undefined {
        return this._address;
    }
    get contact(): ContactVo | undefined {
        return this._contact;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validate(): boolean {
        return true;
    }
}
