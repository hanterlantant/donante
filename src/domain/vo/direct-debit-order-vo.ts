import { DomainBuilder, Validatable } from 'ts-generic-builder';
import { DirectDebitRhythm } from '../enum/direct-debit-rhythm';

interface DirectDebitOrder extends Validatable {
    readonly iban: string;
    readonly bic: string;
    readonly bankName: string;
    readonly amount: number;
    readonly rhythm: DirectDebitRhythm;
}

export class DirectDebitOrderVo implements DirectDebitOrder {
    private _iban: string;
    private _bic: string;
    private _bankName: string;
    private _amount: number;
    private _rhythm: DirectDebitRhythm;

    constructor(builder: DomainBuilder<DirectDebitOrder, DirectDebitOrderVo> & DirectDebitOrder) {
        this._iban = builder.iban;
        this._bic = builder.bic;
        this._bankName = builder.bankName;
        this._amount = builder.amount;
        this._rhythm = builder.rhythm;
    }

    get iban(): string {
        return this._iban;
    }
    get bic(): string {
        return this._bic;
    }
    get bankName(): string {
        return this._bankName;
    }
    get amount(): number {
        return this._amount;
    }
    get rhythm(): DirectDebitRhythm {
        return this._rhythm;
    }

    validate(): boolean {
        let result = true;
        result = result && IBAN.isValid(this._iban);
        result = result && this._bic.trim().length > 0;
        result = result && this._bankName.trim().length > 0;
        result = result && this._amount > 0;

        return result;
    }
}
