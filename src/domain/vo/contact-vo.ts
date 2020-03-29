import { DomainBuilder, Validatable } from 'ts-generic-builder';

const emailRegExp = new RegExp('^[a-zA-Z0-9_+&*-]+(?:.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+.)+[a-zA-Z]{2,7}$');
const phoneRegExp = new RegExp('^[+]+[0-9]{8,}|0[0-9]{8,}$');

interface Contact extends Validatable {
    readonly email?: string;
    readonly mobile?: string;
    readonly phone?: string;
}

export class ContactVo implements Contact {
    private _email?: string;
    private _mobile?: string;
    private _phone?: string;

    constructor(builder: DomainBuilder<Contact, ContactVo> & Contact) {
        this._email = builder.email;
        this._mobile = builder.mobile;
        this._phone = builder.phone;
    }

    get email(): string | undefined {
        return this._email;
    }
    get mobile(): string | undefined {
        return this._mobile;
    }
    get phone(): string | undefined {
        return this._phone;
    }

    validate(): boolean {
        let result = true;
        result = result && this._email != null ? emailRegExp.test(this._email) : result;
        result = result && this._mobile != null ? phoneRegExp.test(this._mobile) : result;
        result = result && this._phone != null ? phoneRegExp.test(this._phone) : result;

        return result;
    }
}
