export interface Payment {
    readonly reference: string;
    readonly amount: number;
    readonly date: Date;
}
