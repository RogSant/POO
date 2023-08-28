import { Bike } from "./bicicleta";
import { Cliente } from "./cliente";

export class Pedido {
    cliente: Cliente
    bike: Bike
    data_reserva: Date
    prev_retorno: Date
    data_devolu: Date

    constructor(cliente: Cliente, bike: Bike, data_reserva: Date, prev_retono: Date, data_devolu: Date){
        if (!bike.disponivel) throw new Error() 
        
        this.cliente = cliente
        this.bike = bike
        this.data_reserva = data_reserva
        this.prev_retorno = prev_retono
        this.data_devolu = data_devolu

        bike.disponivel = false
    }
}