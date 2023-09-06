import { TransactionModelInterface } from '../interfaces/model.interface';
import Transactions from '../interfaces/transactions.interface';
import TransactionModel from '../models/transactionModel';


export class TransactionService implements TransactionModelInterface<Transactions> {
    private transactionModel = new TransactionModel();

    async create(transaction: Transactions): Promise<number | null> {
        const response = await this.transactionModel.create(transaction);
        if (response === null) {
            throw new Error('não foi possível efetuar a transação');
        }
        return response;
    }

    async list(): Promise<Partial<Transactions>[]> {
        const response = await this.transactionModel.list();
        return response;
    }

    async find(id: number): Promise<Partial<Transactions> | null> {
        const response = await this.transactionModel.find(id);
        if (response === null) {
            throw new Error('não foi possível encontrar a transação');
        }
        return response;
    }

    async update(id: number, cashback: number): Promise<void> {
        await this.transactionModel.update(id, cashback);
    }

}