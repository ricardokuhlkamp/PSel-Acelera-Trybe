export interface TransactionModelInterface<T> {
    create(transaction: T): Promise<number | null>;
    list(): Promise<Partial<T>[]>;
    find(id: number): Promise<Partial<T> | null>;
    update(id: number, cashback: number): Promise<void>;
}

export interface AccountModelInterface<T> {
    create(account: T): Promise<number | null>;
    update(account: T): Promise<void>;
    find(id: number): Promise<T | null>;
}