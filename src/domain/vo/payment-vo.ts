import { Builder, Validatable } from 'ts-generic-builder';

export class PaymentVo implements Validatable {
    public readonly reference: string;
    public readonly amount: number;
    public readonly date: Date;

    constructor(builder: Builder<PaymentVo> & PaymentVo) {
        this.reference = builder.reference;
        this.amount = builder.amount;
        this.date = builder.date;
    }

    validate(): boolean {
        let result = true;
        result = result && this.reference.trim().length > 0;
        result = result && this.amount >= 0;
        result = result && this.date < new Date();

        return result;
    }
}
