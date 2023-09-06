export default interface TransactionsList {
    id?: number;
    accountId: number;    
    date: string,
    value: number,
    cashback?: number;  
}
