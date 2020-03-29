import { DomainBuilder, Validatable } from 'ts-generic-builder';
import { MembershipType } from '../enum/membership-type';
import { DirectDebitOrderVo } from './direct-debit-order-vo';
import { MembershipFeePaymentVo } from './membership-fee-payment';

interface Membership extends Validatable {
    readonly begin: Date;
    readonly type: MembershipType;
    readonly number: number;
    readonly fee: number;
    readonly feePayments: MembershipFeePaymentVo[];
    readonly directDebitOrder?: DirectDebitOrderVo;
    readonly end?: Date;
}

export class MembershipVo implements Membership {
    private _begin: Date;
    private _type: MembershipType;
    private _number: number;
    private _fee: number;
    private _feePayments: MembershipFeePaymentVo[];
    private _directDebitOrder?: DirectDebitOrderVo;
    private _end?: Date;

    constructor(builder: DomainBuilder<Membership, MembershipVo> & Membership) {
        this._begin = builder.begin;
        this._number = builder.number;
        this._directDebitOrder = builder.directDebitOrder;
        this._end = builder.end;
        this._type = builder.type;
        this._fee = builder.fee;
        this._feePayments = builder.feePayments;
    }

    get begin(): Date {
        return this._begin;
    }
    get type(): MembershipType {
        return this._type;
    }
    get number(): number {
        return this._number;
    }
    get fee(): number {
        return this._fee;
    }
    get feePayments(): MembershipFeePaymentVo[] {
        return this._feePayments;
    }
    get directDebitOrder(): DirectDebitOrderVo | undefined {
        return this._directDebitOrder;
    }
    get end(): Date | undefined {
        return this._end;
    }

    terminate(endDate: Date): void {
        this._end = endDate;
    }

    validate(): boolean {
        let result = true;
        result = result && this._number >= 0;
        result = result && this._fee >= 0;

        return result;
    }
}
