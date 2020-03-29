import { DomainBuilder, Validatable } from 'ts-generic-builder';
import { PersonEntity } from './entity/person-entity';
import { MembershipType } from './enum/membership-type';
import { DonationVo } from './vo/donation-vo';
import { MembershipFeePaymentVo } from './vo/membership-fee-payment';
import { MembershipVo } from './vo/membership-vo';

interface Donator extends Validatable {
    readonly id: string;
    readonly originator: PersonEntity;
    readonly membership: MembershipVo;
    readonly donations: DonationVo[];
}

export class DonatorAggregate implements Donator {
    private _id: string;
    private _originator: PersonEntity;
    private _membership: MembershipVo;
    private _donations: DonationVo[];

    constructor(builder: DomainBuilder<Donator, DonatorAggregate> & Donator) {
        this._id = builder.id;
        this._originator = builder.originator;
        this._membership = builder.membership;
        this._donations = builder.donations;
    }

    get id(): string {
        return this._id;
    }
    get originator(): PersonEntity {
        return this._originator;
    }
    get donations(): DonationVo[] {
        return this._donations;
    }
    get membership(): MembershipVo {
        return this._membership;
    }

    startMembership(type: MembershipType, begin: Date, fee: number): void {
        const number = 160;
        this._membership = new DomainBuilder(MembershipVo)
            .with({ type })
            .with({ begin })
            .with({ number })
            .with({ fee })
            .with({ feePayments: [] })
            .build();
    }

    terminateMembership(endDate: Date): void {
        this.membership.terminate(endDate);
    }

    enterDonation(date: Date, reference: string, amount: number, eventId?: string, projectId?: string): void {}

    collectMembershipFee(dueDate: Date): void {}

    createDonationReceiptForPayment(payment: MembershipFeePaymentVo): void {}

    createDonationReceipt(fromDate: Date, toDate: Date): void {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validate(): boolean {
        return true;
    }
}
