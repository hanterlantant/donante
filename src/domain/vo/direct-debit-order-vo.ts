import { Builder, Validatable } from 'ts-generic-builder';
import { DirectDebitOrder } from '../../infrastructure/persistence/common/direct-debit-order';
import { DirectDebitRhythm } from '../enum/direct-debit-rhythm';

export class DirectDebitOrderVo implements Validatable {
    public readonly iban: string;
    public readonly bic: string;
    public readonly bankName: string;
    public readonly amount: number;
    public readonly rhythm: DirectDebitRhythm;

    constructor(builder: Builder<DirectDebitOrderVo> & DirectDebitOrder) {
        this.iban = builder.iban;
        this.bic = builder.bic;
        this.bankName = builder.bankName;
        this.amount = builder.amount;
        this.rhythm = builder.rhythm;
    }

    validate(): boolean {
        let result = true;
        result = result && IBAN.isValid(this.iban);
        result = result && this.bic.trim().length > 0;
        result = result && this.bankName.trim().length > 0;
        result = result && this.amount > 0;

        return result;
    }
}
