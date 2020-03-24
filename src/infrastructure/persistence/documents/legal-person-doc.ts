import { Document } from 'nano';

export interface LegalPersonDocument extends Document {
    readonly name?: string;
}
