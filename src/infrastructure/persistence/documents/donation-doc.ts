import { Document } from 'nano';
import { Payment } from '../common/payment';

export interface DonationDocument extends Document {
    readonly originatorId: string;
    readonly payment: Payment;
    readonly projectId?: string;
    readonly eventId?: string;
}
