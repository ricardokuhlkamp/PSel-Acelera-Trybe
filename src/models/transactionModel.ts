import { RowDataPacket } from 'mysql2';
import conn from '../database/connection';
import Transactions from '../interfaces/transactions.interface';
import TransactionsList from '../interfaces/transactionsList.interface';
import { TransactionModelInterface } from '../interfaces/model.interface';
const DATABASE = 'BancoAcelera';

export default class TransactionModel implements TransactionModelInterface<
Transactions | TransactionsList
> {
    constructor(
        private tableName: string = 'transactions',
        private connection = conn) {}
    
    async create(transaction: Transactions) {
        const { originAccountId, destinationAccountId, value, date } = transaction;
        await this.connection.execute(
            `INSERT INTO ${DATABASE}.${this.tableName}(
                origin_account_id, destination_account_id, value, date, 
            ) VALUES (?, ?, ?, ?, ?);`,
            [ originAccountId, destinationAccountId, value, date ]
        );
    }
 

    async update(id: number, cashback: number) {        
        await this.connection.execute(
            `UPDATE ${DATABASE}.${this.tableName}
            SET cashback = (?) 
            WHERE id = (?);`, [ id, cashback ]
        );
    }

    async list() {
        const result = await this.connection.execute(
          `SELECT id AS transactionId, destination_account_id AS accountId, date, value, cashback
          FROM ${DATABASE}.${this.tableName};`
        );
        const [ transictions ] = result;
        return transictions as TransactionsList[];
    }
    
    async find(id: number): Promise<Transactions | null> {
        const result = await this.connection.execute(
          `SELECT id, origin_account_id, destination_account_id, value, date, cashback
          FROM ${DATABASE}.${this.tableName} as C WHERE C.id = ?;`, [ id ]
        );
        const [ transaction ] = result as RowDataPacket[];
        return transaction[ 0 ] as Transactions;
      }

}