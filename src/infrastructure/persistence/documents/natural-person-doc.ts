import { Document } from 'nano';
import { Address } from '../common/address';
import { Contact } from '../common/contact';

export interface NaturalPersonDocument extends Document {
    readonly address?: Address;
    readonly contact?: Contact;
    readonly title?: string;
    readonly degree?: string;
    readonly firstname?: string;
    readonly surname?: string;
    readonly birthday?: Date;
}
