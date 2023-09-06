import Account from '../interfaces/account.interface';
import { AccountModelInterface } from '../interfaces/model.interface';
import AccountModel from '../models/accountModel';

export class AccountService implements AccountModelInterface<Account> {
    private accountModel = new AccountModel();
    async create(account: Account): Promise<number | null> {
        const response = await this.accountModel.create(account);
        if(response === null) {
            throw new Error('Não foi possível criar a conta');
        }
        return response;       
    }

    async update(account: Account): Promise<void> {
        await this.accountModel.update(account);
    }

    async find(id: number): Promise<Account | null> {
        const response = await this.accountModel.find(id);
        if(response === null) {
            throw new Error('Não foi possível criar a conta');
        }
        return response;
    }
}