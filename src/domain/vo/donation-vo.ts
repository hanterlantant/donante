import { DomainBuilder, Validatable } from 'ts-generic-builder';

interface Donation extends Validatable {
    readonly date: Date;
    readonly reference: string;
    readonly amount: number;
    readonly eventId?: string;
    readonly projectId?: string;
}

export class DonationVo implements Donation {
    private _date: Date;
    private _reference: string;
    private _amount: number;
    private _eventId?: string;
    private _projectId?: string;

    constructor(builder: DomainBuilder<Donation, DonationVo> & Donation) {
        this._reference = builder.reference;
        this._amount = builder.amount;
        this._date = builder.date;
        this._eventId = builder.eventId;
        this._projectId = builder.projectId;
    }

    get date(): Date {
        return this._date;
    }
    get reference(): string {
        return this._reference;
    }
    get amount(): number {
        return this._amount;
    }
    get eventId(): string | undefined {
        return this._eventId;
    }

    get projectId(): string | undefined {
        return this._projectId;
    }

    validate(): boolean {
        let result = true;
        result = result && this._reference.trim().length > 0;
        result = result && this._amount >= 0;
        result = result && this._date < new Date();

        return result;
    }
}
