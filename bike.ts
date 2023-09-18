import { Position } from "./position";

export class Bike {

    constructor(
        public name: string,
        public type: string,
        public bodySize: number,
        public maxLoad: number,
        public rate: number,
        public description: string,
        public ratings: number,
        public imageUrls: string[],
        public available: boolean = true,
        public position: Position = new Position(0.0, 0.0),
        public id?: string
    ) {}
}
