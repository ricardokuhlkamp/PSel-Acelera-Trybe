export default interface AccountModel {
    id?: number;
    cpfCnpj: string;
    name: string;
    email: string;
    password: string;
    status: boolean;
}