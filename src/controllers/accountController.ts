import { NextFunction, Request, Response } from 'express';
import { AccountService } from '../services/accountService';
import Account from '../interfaces/account.interface';
// import Account from '../interfaces/account.interface';

export async function create(req: Request, res: Response, next: NextFunction) {
    const { cpfCnpj, name, email, password, balance, status } = req.body;
    const account = {
        cpfCnpj, name, email, password, balance, status
    }
    const accountService = new AccountService();
    try {
        const response = accountService.create(account as Account)
        return res.status(201).json(response)
    } catch (error) {
        next(error)
    }
}