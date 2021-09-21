export class Record {
    constructor(
        public id: number,
        public description: string,
        public date: string,
        public value: number,
        public recordCategory: number
    ) {}
}