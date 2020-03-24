import { Builder, Validatable } from 'ts-generic-builder';
import { AddressVo } from '../vo/address-vo';
import { ContactVo } from '../vo/contact-vo';

export abstract class PersonEntity implements Validatable {
    public readonly id: string;
    public readonly address?: AddressVo;
    public readonly contact?: ContactVo;

    protected constructor(builder: Builder<PersonEntity> & PersonEntity) {
        this.id = builder.id;
        this.address = builder.address;
        this.contact = builder.contact;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validate(): boolean {
        return true;
    }
}
