export default interface Transactions {
    id?: number;
    originAccountId: number;
    destinationAccountId: number;
    value: number,
    date: string,
    cashback: number;
    created_at: string;    
}
