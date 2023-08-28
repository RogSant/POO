export class Bike {
    numserie: number
    valor: number
    disponivel: boolean = true

    constructor(numserie: number, valor: number){
        this.numserie = numserie
        this.valor = valor
    }
}