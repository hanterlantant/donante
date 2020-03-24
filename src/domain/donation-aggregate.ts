import { Builder, Validatable } from 'ts-generic-builder';
import { EventEntity } from './entity/event-entity';
import { PersonEntity } from './entity/person-entity';
import { ProjectEntity } from './entity/project-entity';
import { PaymentVo } from './vo/payment-vo';

export class DonationAggregate implements Validatable {
    public readonly id: string;
    public readonly originator: PersonEntity;
    public readonly payment: PaymentVo;
    public readonly project?: ProjectEntity;
    public readonly event?: EventEntity;

    constructor(builder: Builder<DonationAggregate> & DonationAggregate) {
        this.id = builder.id;
        this.originator = builder.originator;
        this.payment = builder.payment;
        this.project = builder.project;
        this.event = builder.event;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validate(): boolean {
        return true;
    }
}
