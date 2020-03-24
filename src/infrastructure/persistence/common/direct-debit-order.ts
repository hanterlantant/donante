import { DirectDebitRhythm } from '../../../domain/enum/direct-debit-rhythm';

export interface DirectDebitOrder {
    readonly iban: string;
    readonly bic: string;
    readonly bankName: string;
    readonly amount: number;
    readonly rhythm: DirectDebitRhythm;
}
