import { DomainBuilder, Validatable } from 'ts-generic-builder';

interface MembershipFeePayment extends Validatable {
    readonly amount: number;
    readonly date: Date;
}

export class MembershipFeePaymentVo implements MembershipFeePayment {
    private _amount: number;
    private _date: Date;

    constructor(builder: DomainBuilder<MembershipFeePayment, MembershipFeePaymentVo> & MembershipFeePayment) {
        this._amount = builder.amount;
        this._date = builder.date;
    }

    get amount(): number {
        return this._amount;
    }
    get date(): Date {
        return this._date;
    }

    validate(): boolean {
        let result = true;
        result = result && this._amount >= 0;
        result = result && this._date < new Date();

        return result;
    }
}
