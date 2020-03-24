import { Document } from 'nano';

export interface Event extends Document {
    readonly name: string;
    readonly description: string;
    readonly date: Date;
}
