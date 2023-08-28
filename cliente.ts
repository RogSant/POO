export class Cliente{
    nome: string
    telefone: string
    endereco: string
    cpf: string

    constructor(nome: string, telefone: string, endereco: string, cpf: string){
        this.nome = nome
        this.telefone = telefone
        this.endereco = endereco
        this.cpf = cpf
    }
}