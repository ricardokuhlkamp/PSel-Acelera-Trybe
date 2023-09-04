// import connection from '../database/connection';
// // import { RowDataPacket } from 'mysql2';
// import AccountModel from '../interfaces/account.interface';

// export const create = async (newAccount: AccountModel): Promise<number> => {
//     // Mapear os campos da interface para camel case
//     const { cpfCnpj, name, email, password, status } = newAccount;
  
//     const result = await connection.execute(
//       `INSERT INTO BancoAcelera.accounts (cpf_cnpj, name, email, password, status) 
//       VALUES (?, ?, ?, ?, ?)`,
//       [cpfCnpj, name, email, password, status]);

//       if (result[0] && 'insertId' in result[0]) {
//         const id = (result[0] as { insertId: number }).insertId;
//         return id;
//       } else {
//         throw new Error('Não foi possível obter o ID do registro recém-criado.');
//       }
// };
