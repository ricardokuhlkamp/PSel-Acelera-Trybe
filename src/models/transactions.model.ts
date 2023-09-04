// import connection from '../database/connection';
// import TransactionsModel from '../interfaces/transactions.interface';

// export const create = async (newTransaction: TransactionsModel): Promise<number> => {
//     const { } = newTransaction;
//     const [result] = await connection.execute('INSERT INTO transactions SET ?', newTransaction);
//     if (result[0] && 'insertId' in result[0]) {
//         const id = (result[0] as { insertId: number }).insertId;
//         return id;
//       } else {
//         throw new Error('Não foi possível obter o ID do registro recém-criado.');
//       }
// };
