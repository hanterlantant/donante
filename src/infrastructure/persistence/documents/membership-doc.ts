import { Document } from 'nano';
import { MembershipType } from '../../../domain/enum/membership-type';
import { DirectDebitOrder } from '../common/direct-debit-order';
import { Payment } from '../common/payment';

export interface MembershipDocument extends Document {
    readonly personId: string;
    readonly begin: Date;
    readonly end?: Date;
    readonly membershipNumber: number;
    readonly membershipFee: number;
    readonly membershipType: MembershipType;
    readonly directDebitOrder?: DirectDebitOrder;
    readonly membershipFeePayments: Payment[];
}
