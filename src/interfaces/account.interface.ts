export default interface Account {
    id?: number;
    cpfCnpj: string;
    name: string;
    email: string;
    password: string;
    status: boolean;
}