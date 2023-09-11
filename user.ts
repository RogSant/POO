export class User{
    nome: string
    telefone: string
    endereco: string
    cpf: string
    email: string
    id: string

    constructor(nome: string, telefone: string, endereco: string, cpf: string, email: string, id: string){
        this.nome = nome
        this.telefone = telefone
        this.endereco = endereco
        this.cpf = cpf
        this.email = email
        this.id = id
    }
}
