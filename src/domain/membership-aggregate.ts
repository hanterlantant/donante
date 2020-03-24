import { Builder, Validatable } from 'ts-generic-builder';
import { PersonEntity } from './entity/person-entity';
import { MembershipType } from './enum/membership-type';
import { DirectDebitOrderVo } from './vo/direct-debit-order-vo';
import { PaymentVo } from './vo/payment-vo';

export class MembershipAggregate implements Validatable {
    public readonly id: string;
    public readonly person: PersonEntity;
    public readonly begin: Date;
    public readonly end?: Date;
    public readonly membershipNumber: number;
    public readonly membershipFee: number;
    public readonly membershipType: MembershipType;
    public readonly directDebitOrder?: DirectDebitOrderVo;
    public readonly membershipFeePayments: PaymentVo[];

    constructor(builder: Builder<MembershipAggregate> & MembershipAggregate) {
        this.id = builder.id;
        this.person = builder.person;
        this.begin = builder.begin;
        this.end = builder.end;
        this.membershipNumber = builder.membershipNumber;
        this.membershipFee = builder.membershipFee;
        this.membershipType = builder.membershipType;
        this.directDebitOrder = builder.directDebitOrder;
        this.membershipFeePayments = builder.membershipFeePayments;
    }

    validate(): boolean {
        let result = true;
        result = result && this.membershipNumber >= 0;
        result = result && this.membershipFee >= 0;

        return result;
    }
}
