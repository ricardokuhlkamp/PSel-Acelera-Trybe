import { RowDataPacket } from 'mysql2';
import conn from '../database/connection';
import Account from '../interfaces/account.interface';
import { AccountModelInterface } from '../interfaces/model.interface';
const DATABASE = 'BancoAcelera';

export default class AccountModel implements AccountModelInterface<Account> {
    constructor(
        private tableName: string = 'accounts',
        private connection = conn) {}
    
    async create(account: Account) {
        const { cpfCnpj, name, email, password, status } = account;
        await this.connection.execute(
            `INSERT INTO ${DATABASE}.${this.tableName}(
                cpf_cnpj, name, email, password, status
            ) VALUES (?, ?, ?, ?, ?);`,
            [ cpfCnpj, name, email, password, status ]
        );
    }

    async update(account: Account) {
        const { id, cpfCnpj, name, email, password, status } = account;
        await this.connection.execute(
            `UPDATE ${DATABASE}.${this.tableName}
            SET cpf_cnpj = (?), name = (?), email = (?), password = (?), status 
            WHERE id = (?);`, [ cpfCnpj, name, email, password, status, id ]
        );
    }

    // async list() {
    //     const result = await this.connection.execute(
    //       `SELECT id, cpf_cnpj, name, email, password, status
    //       FROM ${DATABASE}.${this.tableName};`
    //     );
    //     const [ accounts ] = result;
    //     return accounts as Account[];
    // }
    
    async find(id: number): Promise<Account | null> {
        const result = await this.connection.execute(
          `SELECT id, cpf_cnpj, name, email, password, status
          FROM ${DATABASE}.${this.tableName} as C WHERE C.id = ?;`, [ id ]
        );
        const [ casts ] = result as RowDataPacket[];
        return casts[ 0 ] as Account;
      }
}