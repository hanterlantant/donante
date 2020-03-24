import { Builder, Validatable } from 'ts-generic-builder';

const emailRegExp = new RegExp('^[a-zA-Z0-9_+&*-]+(?:.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+.)+[a-zA-Z]{2,7}$');
const phoneRegExp = new RegExp('^[+]+[0-9]{8,}|0[0-9]{8,}$');

export class ContactVo implements Validatable {
    public readonly email?: string;
    public readonly mobile?: string;
    public readonly phone?: string;

    constructor(builder: Builder<ContactVo> & ContactVo) {
        this.email = builder.email;
        this.mobile = builder.mobile;
        this.phone = builder.phone;
    }

    validate(): boolean {
        let result = true;
        result = result && this.email != null ? emailRegExp.test(this.email) : result;
        result = result && this.mobile != null ? phoneRegExp.test(this.mobile) : result;
        result = result && this.phone != null ? phoneRegExp.test(this.phone) : result;

        return result;
    }
}
