export class Bike {
    id: string
    valor: number
    disponivel: boolean = true

    constructor(numserie: string, valor: number){
        this.id = numserie
        this.valor = valor
    }
}
