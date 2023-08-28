import { Bike } from "./bicicleta"

export class Comprovante {
    valTotal: number
    valMulta: number
    cpf: string
    data_devolu: Date
    bike: Bike

    constructor(valTotal: number, valMulta: number, cpf: string, data_devolu: Date, bike: Bike){
        this.valTotal = valTotal
        this.valMulta = valMulta
        this.cpf = cpf
        this.data_devolu = data_devolu
        this.bike = bike

        bike.disponivel = true

    }
}