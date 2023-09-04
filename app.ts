import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";

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

    rentBike(bikeId: string, userEmail: string, startDate: Date, endDate: Date): void {
        const rUser = this.findUser(userEmail)
        const rBike = this.findBike(bikeId)
        Rent.create(this.rents, rBike, rUser, startDate, endDate)
        
    }

    returnBike(userEmail: string, bikeId: string, returnDate: Date):void {
        const rUser = this.findUser(userEmail)
        const rBike = this.findBike(bikeId)
        for(const rRent of this.rents)
            if(rRent.user == rUser && rRent.bike == rBike && !rRent.dateReturned)
                rRent.dateReturned = returnDate       
    }
}


