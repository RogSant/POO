import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import { Position } from "./position";

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    findUser(email: string): User {
        return this.users.find(user => user.email === email)
    }
    
    findBike(id: string): Bike {
        return this.bikes.find(bike => bike.id === id)
    }

    findRent(bike: Bike, user: User, start: Date): Rent {
        return this.rents.find(rent => rent.user === user && rent.bike === bike && rent.start === start )
    }

    registerUser(user: User): void {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        user.id = crypto.randomUUID()
        this.users.push(user)
    }

    registerBike(bike: Bike): void {
        for(const rBike of this.bikes) {
            if (rBike.id === bike.id) {
                throw new Error('Duplicated bike.')
            }
        }
        bike.id = crypto.randomUUID()
        this.bikes.push(bike)
    }

    removeUser(email: string): void {
        this.users.splice(this.users.indexOf(this.findUser(email)), 1)
    }

    rentBike(bikeId: string, userEmail: string, start: Date): void {
        const rUser = this.findUser(userEmail)
        const rBike = this.findBike(bikeId)
        if(!rBike.disponivel) throw new Error ('Bike não disponível.') 
        const rRent = Rent.create(rUser, rBike, start, false)
        this.rents.push(rRent)
    }

    returnBike(userEmail: string, bikeId: string, start: Date, end: Date): value: Number  {
        const rUser = this.findUser(userEmail)
        const rBike = this.findBike(bikeId)
        const rRent = this.findRent(rUser, rBike, start)
        rRent.end = end
        const value = (rRent.end.gettime() - rRent.start.gettime()) / 3600000 * rBike.rate 
    }

    locateBike(bikeID: string, newPosition: Position): void {
        const rBike = findBike(bikeID)
        rBike.position = newPosition
    }
}

