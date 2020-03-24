import { Document } from 'nano';

export interface Project extends Document {
    readonly name: string;
    readonly description: string;
    readonly costs: number;
    readonly city: string;
    readonly begin: Date;
    readonly end?: Date;
    readonly gpsLongitude?: string;
    readonly gpsLatitude?: string;
}
